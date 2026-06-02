
export default function Card() {
  return (
    <div className="max-w-sm overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-xl transition-all duration-300 hover:scale-105 dark:border-gray-700 dark:bg-gray-800">
      
      <img
        className="h-56 w-full object-cover"
        src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop"
        alt="AI Developer"
      />

      <div className="p-6">
        <span className="rounded-full bg-purple-100 px-3 py-1 text-sm font-medium text-purple-700 dark:bg-purple-900 dark:text-purple-300">
          AI & Web Development
        </span>

        <h2 className="mt-4 text-2xl font-bold text-gray-900 dark:text-white">
          Full Stack Developer
        </h2>

        <p className="mt-3 text-gray-600 dark:text-gray-300">
          Building intelligent web applications with React,
          Node.js, AI integrations, and modern cloud technologies.
        </p>

        <div className="mt-5 flex gap-2">
          <span className="rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-700 dark:text-gray-200">
            React
          </span>

          <span className="rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-700 dark:text-gray-200">
            Node.js
          </span>

          <span className="rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-700 dark:text-gray-200">
            AI
          </span>
        </div>

        <div className="mt-6 flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Experience
            </p>
            <p className="text-lg font-bold text-gray-900 dark:text-white">
              3+ Projects
            </p>
          </div>

          <button className="rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 px-5 py-2 text-white transition hover:opacity-90">
            View Profile
          </button>
        </div>
      </div>
    </div>
  );
}