import React, { useEffect, useState } from "react";
import GoalForm from "./components/GoalForm";
import GoalList from "./components/GoalList";

const App = () => {
  const [goals, setGoals] = useState([]);

  // 🟡 Fetch all goals on page load
  useEffect(() => {
    fetch("http://localhost:8080/api/goals")
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched goals:", data);
        setGoals(data);
      })
      .catch((err) => console.error("Error loading goals:", err));
  }, []);

  // 🟢 Add new goal
  const handleAddGoal = (goalData) => {
    fetch("http://localhost:8080/api/goals", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(goalData),
    })
      .then((res) => res.json())
      .then((savedGoal) => {
        console.log("New goal added:", savedGoal);
        setGoals((prev) => [...prev, savedGoal]);
      })
      .catch((err) => console.error("Error adding goal:", err));
  };

  // 🔴 Delete goal
  const handleDeleteGoal = (id) => {
    fetch(`http://localhost:8080/api/goals/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        setGoals((prev) => prev.filter((goal) => goal.id !== id));
      })
      .catch((err) => console.error("Error deleting goal:", err));
  };

  const handleToggleGoal = async (id) => {
    try {
      const response = await fetch(`http://localhost:8080/api/goals/${id}/toggle`, {
        method: "PATCH",
      });
      if (response.ok) {
        const updatedGoal = await response.json();
        setGoals((prevGoals) =>
          prevGoals.map((goal) =>
            goal.id === id ? updatedGoal : goal
          )
        );
      }
    } catch (error) {
      console.error("Error toggling goal completion", error);
    }
  };
  

  const handleUpdateGoal = (updatedGoal) => {
    fetch(`http://localhost:8080/api/goals/${updatedGoal.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedGoal),
    })
      .then((res) => res.json())
      .then((data) => {
        setGoals((prev) =>
          prev.map((goal) => (goal.id === data.id ? data : goal))
        );
      })
      .catch((err) => console.error("Error updating goal:", err));
  };
  

  
  

  return (
    <div className="max-w-3xl mx-auto mt-8 p-4">
      <h1 className="text-3xl font-bold mb-4 text-center">🎯 Goal Tracker</h1>
      <GoalForm onAdd={handleAddGoal} />
      <GoalList 
  goals={goals} 
  onDelete={handleDeleteGoal} 
  onUpdate={handleUpdateGoal} 
/>

    </div>
  );
};

export default App;
