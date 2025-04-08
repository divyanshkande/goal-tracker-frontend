import { useState } from "react";
import GoalList from "./components/GoalList";
import GoalForm from "./components/GoalForm";

function App() {
  const [goals, setGoals] = useState([]);

  const addGoalHandler = (goalText) => {
    const newGoal = {
      id: Date.now(),
      text: goalText,
    };
    setGoals((prevGoals) => [newGoal, ...prevGoals]);
  };

  return (
    <div className="p-4 text-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">🎯 Goal Tracker</h1>
      <GoalForm onAddGoal={addGoalHandler} />
      <GoalList goals={goals} />
    </div>
  );
}

export default App;
