'use client';

import dynamic from 'next/dynamic';

// Dynamic import for QuizApp (client-side only)
const GDGQuizApp = dynamic(() => import('@/components/QuizApp'), {
  ssr: false,
  loading: () => (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
      <div className="text-white text-2xl font-bold animate-pulse">
        🚀 Loading GDG NITJ Quiz...
      </div>
    </div>
  ),
});

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100">
      <GDGQuizApp />
    </main>
  );
}
