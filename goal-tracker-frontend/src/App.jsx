import React from 'react';
import GoalList from './components/GoalList';
 // ✅ Make sure this path is correct

function App() {
  return (
    <div className="text-center mt-10">
      <h1 className="text-4xl font-bold mb-4">Goal Tracker</h1>
      <p className="text-lg mb-8">Let's start building!</p>

      {/* ✅ Add this line */}
      <GoalList />
<p className="text-sm text-red-500">Debug: GoalList component inserted here ✅</p>

    </div>
  );
}

export default App;
