import React from "react";

const GoalCard = ({ goal, onDelete }) => {
  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow flex justify-between items-center">
      <div>
        <h3 className="text-xl font-bold">{goal.title}</h3>
        <p className="text-gray-700">{goal.description}</p>
      </div>
      <button
        onClick={() => onDelete(goal.id)}
        className="bg-red-100 text-red-600 font-semibold px-3 py-1 rounded hover:bg-red-200"
      >
        ❌ Delete
      </button>
    </div>
  );
};

export default GoalCard;
