import React from "react";
import GoalCard from "./GoalCard";

const GoalList = ({ goals, onDelete, onUpdate }) => {
  return (
    <div>
      {goals.map((goal) => (
        <GoalCard key={goal.id} goal={goal} onDelete={onDelete} onUpdate={onUpdate} />
      ))}
    </div>
  );
};
export default GoalList;
