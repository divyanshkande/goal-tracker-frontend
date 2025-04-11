import React from "react";
import GoalCard from "./GoalCard";

const GoalList = ({ goals, onDelete }) => {
  if (!goals || goals.length === 0) {
    return <p className="text-center text-gray-500">No goals added yet.</p>;
  }

  return (
    <div className="space-y-4">
      {goals.map((goal) => (
        <GoalCard key={goal.id} goal={goal} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default GoalList;
