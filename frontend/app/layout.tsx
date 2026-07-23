import type { Metadata } from 'next';
import Link from 'next/link';
import './globals.css';

export const metadata: Metadata = {
  title: 'Demo Restaurant',
  description: 'Next.js + TypeScript + Tailwind + FastAPI',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-900 font-sans min-h-screen">
        <nav className="bg-slate-800 text-white p-4 shadow-md">
          <div className="max-w-4xl mx-auto flex justify-between items-center">
            <h2 className="text-xl font-bold">Demo Restaurant</h2>
            <div className="space-x-6 font-semibold">
              <Link href="/" className="hover:text-blue-400 transition">Home</Link>
              <Link href="/menu" className="hover:text-blue-400 transition">Menu</Link>
              <Link href="/order" className="hover:text-blue-400 transition">Order Now</Link>
            </div>
          </div>
        </nav>
        
        <main className="max-w-4xl mx-auto mt-8 p-6 bg-white rounded-lg shadow-lg">
          {children}
        </main>
      </body>
    </html>
  );
}