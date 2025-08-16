export default function Home() {
  return (
    <div className="min-h-screen bg-black text-green-400 font-mono">
      {/* Terminal-style header */}
      <header className="border-b border-green-400/30 p-4">
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="text-green-400">~/shivam-blog</span>
              <span className="animate-pulse">_</span>
            </div>
            <div className="text-sm text-green-400/70">
              {new Date().toLocaleDateString()}
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="border-b border-green-400/30 p-4">
        <div className="container mx-auto">
          <ul className="flex space-x-8 text-sm">
            <li><a href="/archive" className="hover:text-green-300 transition-colors">Archive</a></li>
            <li><a href="/til" className="hover:text-green-300 transition-colors">TIL</a></li>
            <li><a href="/about" className="hover:text-green-300 transition-colors">About</a></li>
            <li><a href="/food-for-thought" className="hover:text-green-300 transition-colors">Food for Thought</a></li>
          </ul>
        </div>
      </nav>

      {/* Main content */}
      <main className="container mx-auto p-4 space-y-12">
        {/* Welcome section */}
        <section className="py-8">
          <h1 className="text-2xl mb-4 text-green-300">
            $ whoami
          </h1>
          <p className="text-green-400/80 leading-relaxed max-w-3xl">
            Welcome to my digital space. I write about technology, life, and everything in between.
            This is where I share my thoughts, learnings, and experiences.
          </p>
        </section>

        {/* Recommended section */}
        <section>
          <h2 className="text-xl mb-6 text-green-300 flex items-center">
            <span className="text-green-400 mr-2">$</span>
            cat recommended.txt
          </h2>
          <div className="space-y-4">
            <article className="border-l-2 border-green-400/30 pl-4 hover:border-green-400/50 transition-colors">
              <h3 className="text-green-300 mb-2">
                <a href="/posts/building-scalable-systems" className="hover:underline">
                  Building Scalable Web Applications
                </a>
              </h3>
              <p className="text-green-400/70 text-sm mb-2">
                A deep dive into architectural patterns and best practices for scaling web applications.
              </p>
              <time className="text-green-400/50 text-xs">2024-03-15</time>
            </article>

            <article className="border-l-2 border-green-400/30 pl-4 hover:border-green-400/50 transition-colors">
              <h3 className="text-green-300 mb-2">
                <a href="/posts/react-performance-tips" className="hover:underline">
                  React Performance Optimization Tips
                </a>
              </h3>
              <p className="text-green-400/70 text-sm mb-2">
                Essential techniques to make your React applications faster and more efficient.
              </p>
              <time className="text-green-400/50 text-xs">2024-03-10</time>
            </article>

            <article className="border-l-2 border-green-400/30 pl-4 hover:border-green-400/50 transition-colors">
              <h3 className="text-green-300 mb-2">
                <a href="/posts/developer-productivity" className="hover:underline">
                  Developer Productivity Hacks
                </a>
              </h3>
              <p className="text-green-400/70 text-sm mb-2">
                Tools and techniques that have significantly improved my development workflow.
              </p>
              <time className="text-green-400/50 text-xs">2024-03-05</time>
            </article>
          </div>
        </section>

        {/* Recent section */}
        <section>
          <h2 className="text-xl mb-6 text-green-300 flex items-center">
            <span className="text-green-400 mr-2">$</span>
            ls -la recent/
          </h2>
          <div className="space-y-4">
            <article className="border-l-2 border-green-400/30 pl-4 hover:border-green-400/50 transition-colors">
              <h3 className="text-green-300 mb-2">
                <a href="/posts/nextjs-14-features" className="hover:underline">
                  Exploring Next.js 14 New Features
                </a>
              </h3>
              <p className="text-green-400/70 text-sm mb-2">
                A comprehensive look at the latest features and improvements in Next.js 14.
              </p>
              <time className="text-green-400/50 text-xs">2024-03-20</time>
            </article>

            <article className="border-l-2 border-green-400/30 pl-4 hover:border-green-400/50 transition-colors">
              <h3 className="text-green-300 mb-2">
                <a href="/posts/typescript-advanced-patterns" className="hover:underline">
                  Advanced TypeScript Patterns
                </a>
              </h3>
              <p className="text-green-400/70 text-sm mb-2">
                Exploring advanced TypeScript patterns for better type safety and code organization.
              </p>
              <time className="text-green-400/50 text-xs">2024-03-18</time>
            </article>

            <article className="border-l-2 border-green-400/30 pl-4 hover:border-green-400/50 transition-colors">
              <h3 className="text-green-300 mb-2">
                <a href="/posts/css-modern-techniques" className="hover:underline">
                  Modern CSS Techniques for 2024
                </a>
              </h3>
              <p className="text-green-400/70 text-sm mb-2">
                Latest CSS features and techniques that are changing how we style web applications.
              </p>
              <time className="text-green-400/50 text-xs">2024-03-16</time>
            </article>

            <article className="border-l-2 border-green-400/30 pl-4 hover:border-green-400/50 transition-colors">
              <h3 className="text-green-300 mb-2">
                <a href="/posts/database-optimization" className="hover:underline">
                  Database Query Optimization
                </a>
              </h3>
              <p className="text-green-400/70 text-sm mb-2">
                Strategies for optimizing database queries and improving application performance.
              </p>
              <time className="text-green-400/50 text-xs">2024-03-12</time>
            </article>

            <article className="border-l-2 border-green-400/30 pl-4 hover:border-green-400/50 transition-colors">
              <h3 className="text-green-300 mb-2">
                <a href="/posts/debugging-techniques" className="hover:underline">
                  Effective Debugging Techniques
                </a>
              </h3>
              <p className="text-green-400/70 text-sm mb-2">
                Tools and methodologies for efficient debugging and problem-solving.
              </p>
              <time className="text-green-400/50 text-xs">2024-03-08</time>
            </article>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-green-400/30 mt-16 p-8">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-green-400/70 text-sm">
              <span className="text-green-400">$</span> echo "Built with Next.js and Tailwind CSS"
            </div>
            <div className="flex space-x-6">
              <a href="https://github.com/t-shivamm" className="text-green-400/70 hover:text-green-400 transition-colors text-sm">
                GitHub
              </a>
              <a href="https://twitter.com/shivam" className="text-green-400/70 hover:text-green-400 transition-colors text-sm">
                Twitter
              </a>
              <a href="https://linkedin.com/in/shivam" className="text-green-400/70 hover:text-green-400 transition-colors text-sm">
                LinkedIn
              </a>
              <a href="mailto:contact@shivam.dev" className="text-green-400/70 hover:text-green-400 transition-colors text-sm">
                Email
              </a>
            </div>
          </div>
          <div className="mt-4 text-center text-green-400/50 text-xs">
            <span className="text-green-400">~/</span> Made with ❤️ by Shivam
          </div>
        </div>
      </footer>
    </div>
  );
}
