import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="text-center py-10">
      <h1 className="text-4xl font-extrabold text-slate-800 mb-4">Welcome to Demo Restaurant</h1>
      <p className="text-lg text-gray-600 mb-8">A demo project for Presidency University CSE.</p>
      <p className="text-lg text-gray-600 mb-8">Trimester 262 - CSE 402</p>
      <Link href="/menu">
        <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-6 rounded-md transition shadow-md">
          View Our Menu
        </button>
      </Link>
    </div>
  );
}