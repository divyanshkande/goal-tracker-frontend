import React from "react";
import GoalList from "./components/GoalList";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-4 text-center flex justify-center items-center gap-2">
        🎯 Goal Tracker
      </h1>
      <GoalList />
    </div>
  );
}

export default App;
