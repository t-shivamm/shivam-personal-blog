import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { notFound } from 'next/navigation'
import { MDXRemote } from 'next-mdx-remote/rsc'

interface BlogPost {
  title: string
  description: string
  date: string
  author: string
  tags: string[]
  content: string
}

interface Params {
  slug: string
}

interface BlogPageProps {
  params: Params
}

// Get all blog post slugs for static generation
export async function generateStaticParams(): Promise<Params[]> {
  const postsDirectory = path.join(process.cwd(), 'content/posts')
  
  try {
    const filenames = fs.readdirSync(postsDirectory)
    const slugs = filenames
      .filter((name) => name.endsWith('.mdx'))
      .map((name) => ({
        slug: name.replace(/\.mdx$/, ''),
      }))
    
    return slugs
  } catch (error) {
    console.error('Error reading posts directory:', error)
    return []
  }
}

// Get blog post data by slug
async function getBlogPost(slug: string): Promise<BlogPost | null> {
  const postsDirectory = path.join(process.cwd(), 'content/posts')
  const fullPath = path.join(postsDirectory, `${slug}.mdx`)
  
  try {
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)
    
    return {
      title: data.title || '',
      description: data.description || '',
      date: data.date || '',
      author: data.author || '',
      tags: data.tags || [],
      content,
    }
  } catch (error) {
    console.error(`Error reading blog post ${slug}:`, error)
    return null
  }
}

// Generate metadata for the page
export async function generateMetadata({ params }: BlogPageProps) {
  const post = await getBlogPost(params.slug)
  
  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }
  
  return {
    title: `${post.title} | Shivam's Blog`,
    description: post.description,
    authors: [{ name: post.author }],
    keywords: post.tags,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
    },
  }
}

export default async function BlogPost({ params }: BlogPageProps) {
  const post = await getBlogPost(params.slug)
  
  if (!post) {
    notFound()
  }
  
  const formatDate = (dateString: string) => {
    try {
      return new Date(dateString).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    } catch {
      return dateString
    }
  }
  
  return (
    <article className="max-w-4xl mx-auto px-6 py-8">
      <header className="mb-8">
        <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-gray-100">
          {post.title}
        </h1>
        
        <div className="flex items-center gap-4 text-gray-600 dark:text-gray-400 mb-4">
          <time dateTime={post.date}>
            {formatDate(post.date)}
          </time>
          <span>•</span>
          <span>by {post.author}</span>
        </div>
        
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
          {post.description}
        </p>
        
        {post.tags && post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-sm bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}
      </header>
      
      <div className="prose prose-lg max-w-none dark:prose-invert prose-headings:text-gray-900 dark:prose-headings:text-gray-100 prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-a:text-blue-600 dark:prose-a:text-blue-400 prose-strong:text-gray-900 dark:prose-strong:text-gray-100 prose-code:text-gray-900 dark:prose-code:text-gray-100 prose-pre:bg-gray-100 dark:prose-pre:bg-gray-800">
        <MDXRemote source={post.content} />
      </div>
    </article>
  )
}
