import React, { useEffect, useState } from "react";
import GoalList from "./components/GoalList";
import { fetchGoals, deleteGoal } from "./api/goalService";

function App() {
  const [goals, setGoals] = useState([]);

  useEffect(() => {
    const getGoals = async () => {
      try {
        const response = await fetchGoals();
        console.log("GOALS FROM BACKEND 👉", response.data); // ✅ See what comes from backend
        setGoals(response.data);
      } catch (error) {
        console.error("Error fetching goals:", error);
      }
    };

    getGoals();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteGoal(id);
      setGoals(goals.filter((goal) => goal.id !== id));
    } catch (error) {
      console.error("Error deleting goal:", error);
    }
  };

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-4">Goal Tracker</h1>

      {/* ✅ Make sure you're passing goals and onDelete */}
      <GoalList goals={goals} onDelete={handleDelete} />
    </div>
  );
}

export default App;
