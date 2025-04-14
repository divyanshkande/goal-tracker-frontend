import React from "react";
import GoalCard from "./GoalCard";

const GoalList = ({ goals, onDelete, onToggle }) => {
  return (
    <div>
      {goals.length === 0 ? (
        <p className="text-center text-gray-500 mt-4">No goals added yet.</p>
      ) : (
        goals.map((goal) => (
          <GoalCard
            key={goal.id}
            goal={goal}
            onDelete={onDelete}
            onToggle={onToggle}
          />
        ))
      )}
    </div>
  );
};

export default GoalList;
