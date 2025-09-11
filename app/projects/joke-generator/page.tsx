"use client";

import { useEffect, useState } from "react";

interface Joke {
  type: string;
  setup: string;
  punchline: string;
  id: number;
}

const JokesGenerator = () => {
  const [joke, setJoke] = useState<Joke | null>(null);
  const [showPunchline, setShowPunchline] = useState(false);

  const fetchJoke = async () => {
    try {
      const URL = "https://official-joke-api.appspot.com/random_joke";
      const res = await fetch(URL);
      const data = await res.json();
      setJoke(data);
      setShowPunchline(false); 
    } catch (err) {
      console.error("Error fetching joke:", err);
    }
  };

  useEffect(() => {
    fetchJoke();
  }, []);

  return (
    <div className="flex h-screen items-center justify-center bg-gray-100 p-4">
      <div className="max-w-md w-full rounded-2xl bg-white shadow-xl p-6 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">🎭 Joke Generator</h2>

        {joke ? (
          <>
            <p className="text-lg text-gray-700 mb-4">{joke.setup}</p>

            {showPunchline ? (
              <p className="text-lg font-semibold text-green-600 mb-4">
                {joke.punchline}
              </p>
            ) : (
              <button
                onClick={() => setShowPunchline(true)}
                className="mb-4 w-full rounded-lg bg-blue-500 px-4 py-2 text-white font-medium shadow hover:bg-blue-600 transition"
              >
                Reveal Punchline
              </button>
            )}

            <button
              onClick={fetchJoke}
              className="w-full rounded-lg bg-purple-500 px-4 py-2 text-white font-medium shadow hover:bg-purple-600 transition"
            >
              Next Joke
            </button>
          </>
        ) : (
          <p className="text-gray-500">Loading a funny joke...</p>
        )}
      </div>
    </div>
  );
};

export default JokesGenerator;
