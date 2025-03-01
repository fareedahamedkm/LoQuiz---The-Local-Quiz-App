import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Timer from './Timer';
import { questions } from '../data/questions';

interface QuizProps {
  username: string;
  onComplete: (score: number, timeSpent: number) => void;
}

export default function Quiz({ username, onComplete }: QuizProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [timeRemaining, setTimeRemaining] = useState(20 * 60); // 20 minutes in seconds
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          handleSubmit();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleAnswer = (answer: string) => {
    setAnswers((prev) => ({
      ...prev,
      [currentQuestion]: answer,
    }));
  };

  const handleSubmit = async () => {
    if (isSubmitting) return;
    setIsSubmitting(true);

    const score = Object.entries(answers).reduce((acc, [questionIndex, answer]) => {
      return acc + (answer === questions[Number(questionIndex)].answer ? 1 : 0);
    }, 0);

    try {
      const response = await fetch('http://localhost:5000/submit_results', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          marks: score,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit quiz results');
      }

      onComplete(score, 1200 - timeRemaining);
    } catch (error) {
      console.error('Error submitting quiz:', error);
      alert('Failed to submit quiz results. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-500 via-pink-500 to-red-500 p-4">
      <Timer timeRemaining={timeRemaining} />

      <div className="max-w-3xl mx-auto bg-white/90 backdrop-blur-lg rounded-2xl p-8 shadow-xl">
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold text-gray-800">
              Question {currentQuestion + 1} of {questions.length}
            </h2>
            <span className="text-sm font-medium text-gray-500">
              {username}
            </span>
          </div>

          <div className="h-2 bg-gray-200 rounded-full">
            <div
              className="h-full bg-gradient-to-r from-purple-600 to-pink-600 rounded-full transition-all duration-300"
              style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
            />
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-medium text-gray-800 mb-6">
            {questions[currentQuestion].question}
          </h3>

          <div className="space-y-4">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(option)}
                className={`w-full p-4 text-left rounded-lg border-2 transition-all ${
                  answers[currentQuestion] === option
                    ? 'border-purple-600 bg-purple-50'
                    : 'border-gray-200 hover:border-purple-300'
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>

        <div className="flex justify-between">
          <button
            onClick={() => setCurrentQuestion((prev) => Math.max(0, prev - 1))}
            disabled={currentQuestion === 0}
            className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-gray-100 text-gray-700 disabled:opacity-50"
          >
            <ChevronLeft className="w-5 h-5" />
            <span>Previous</span>
          </button>

          {currentQuestion === questions.length - 1 ? (
            <button
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-medium hover:opacity-90 transition-opacity disabled:opacity-50"
            >
              {isSubmitting ? 'Submitting...' : 'Submit Quiz'}
            </button>
          ) : (
            <button
              onClick={() => setCurrentQuestion((prev) => Math.min(questions.length - 1, prev + 1))}
              className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-purple-600 text-white"
            >
              <span>Next</span>
              <ChevronRight className="w-5 h-5" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}