import React, { useState } from "react";
import GoalForm from "./GoalForm";
import GoalCard from "./GoalCard";

const GoalList = () => {
  const [goals, setGoals] = useState([]);

  const handleAddGoal = (goal) => {
    setGoals((prevGoals) => [...prevGoals, goal]);
  };

  const handleDeleteGoal = (id) => {
    setGoals((prevGoals) => prevGoals.filter((goal) => goal.id !== id));
  };

  return (
    <div className="max-w-xl mx-auto">
      <GoalForm onAddGoal={handleAddGoal} />
      {goals.map((goal) => (
        <GoalCard key={goal.id} goal={goal} onDelete={handleDeleteGoal} />
      ))}
    </div>
  );
};

export default GoalList;
