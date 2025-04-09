import React from "react";

const GoalCard = ({ goal, onDelete }) => {
  return (
    <div className="bg-white shadow-md rounded p-4 mb-4">
      <h3 className="text-xl font-semibold">{goal.title}</h3>
      <p className="text-gray-600">{goal.description}</p>
      <button
        onClick={() => onDelete(goal.id)}
        className="text-red-500 hover:underline mt-2"
      >
        Delete
      </button>
    </div>
  );
};

export default GoalCard;
