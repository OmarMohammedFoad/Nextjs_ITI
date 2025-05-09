'use client';

export default function GlobalError({ error, reset }: { error: Error; reset: () => void }) {
    return (
      <html>
        <body className="p-8 text-center">
          <h2 className="text-red-600 text-2xl mb-4">Something went wrong!</h2>
          <p className="mb-4">{error.message}</p>
          <button onClick={() => reset()} className="bg-blue-600 text-white px-4 py-2 rounded">
            Try again
          </button>
        </body>
      </html>
    );
  }