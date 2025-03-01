import React, { useState } from 'react';
import Login from './components/Login';
import Quiz from './components/Quiz';
import Leaderboard from './components/Leaderboard';

function App() {
  const [username, setUsername] = useState<string | null>(null);
  const [showLeaderboard, setShowLeaderboard] = useState(false);

  const handleLogin = (username: string) => {
    setUsername(username);
  };

  const handleQuizComplete = () => {
    setShowLeaderboard(true);
  };

  const handleRestart = () => {
    setUsername(null);
    setShowLeaderboard(false);
  };

  if (!username) {
    return <Login onLogin={handleLogin} />;
  }

  if (showLeaderboard) {
    return (
      <Leaderboard
        currentUser={username}
        onRestart={handleRestart}
      />
    );
  }

  return (
    <Quiz
      username={username}
      onComplete={handleQuizComplete}
    />
  );
}

export default App;