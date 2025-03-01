import React, { useState, useEffect } from 'react';
import { Trophy } from 'lucide-react';
import { questions } from '../data/questions';

interface LeaderboardProps {
  currentUser: string;
  onRestart: () => void;
}

interface UserScore {
  username: string;
  marks: number;
}

export default function Leaderboard({ currentUser, onRestart }: LeaderboardProps) {
  const [scores, setScores] = useState<UserScore[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchScores = async () => {
      try {
        const response = await fetch('http://localhost:5000/leaderboard');
        if (!response.ok) {
          throw new Error('Failed to fetch leaderboard');
        }
        const data = await response.json();
        setScores(data.sort((a: UserScore, b: UserScore) => b.marks - a.marks));
      } catch (err) {
        setError('Failed to load leaderboard');
        console.error('Error fetching leaderboard:', err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchScores();
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-500 via-pink-500 to-red-500 p-4 flex items-center justify-center">
        <div className="text-white text-xl">Loading leaderboard...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-500 via-pink-500 to-red-500 p-4 flex items-center justify-center">
        <div className="text-white text-xl">{error}</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-500 via-pink-500 to-red-500 p-4">
      <div className="max-w-3xl mx-auto bg-white/90 backdrop-blur-lg rounded-2xl p-8 shadow-xl">
        <div className="flex items-center justify-center mb-8">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-3 rounded-full">
            <Trophy className="w-8 h-8 text-white" />
          </div>
        </div>

        <h2 className="text-3xl font-bold text-center mb-8">Leaderboard</h2>

        <div className="space-y-4 mb-8">
          {scores.map((result, index) => (
            <div
              key={index}
              className={`flex items-center p-4 rounded-lg ${
                result.username === currentUser
                  ? 'bg-purple-50 border-2 border-purple-600'
                  : 'bg-gray-50'
              }`}
            >
              <div className="flex-1">
                <div className="flex items-center space-x-4">
                  <span className="text-2xl font-bold text-gray-400">
                    #{index + 1}
                  </span>
                  <div>
                    <p className="font-medium text-gray-900">{result.username}</p>
                  </div>
                </div>
              </div>
              <div className="text-2xl font-bold text-purple-600">
                {result.marks}/{questions.length}
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={onRestart}
          className="w-full py-3 px-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-medium hover:opacity-90 transition-opacity"
        >
          Take Quiz Again
        </button>
      </div>
    </div>
  );
}