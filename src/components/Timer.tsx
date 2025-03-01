import React from 'react';
import { Clock } from 'lucide-react';

interface TimerProps {
  timeRemaining: number;
}

export default function Timer({ timeRemaining }: TimerProps) {
  const minutes = Math.floor(timeRemaining / 60);
  const seconds = timeRemaining % 60;

  return (
    <div className="fixed top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg flex items-center space-x-2">
      <Clock className="w-5 h-5 text-purple-600" />
      <span className="font-mono text-lg font-bold">
        {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
      </span>
    </div>
  );
}