import Link from "next/link";

export default function GlobalNotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen mt-20 text-white px-4">
      <h1 className="text-7xl font-bold mb-4 animate-bounce">404</h1>
      <p className="text-2xl text-gray-300 mb-6 text-center">
        Oops! The page you’re looking for doesn’t exist.
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <Link
          href="/"
          className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold shadow-lg transition-colors"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}
