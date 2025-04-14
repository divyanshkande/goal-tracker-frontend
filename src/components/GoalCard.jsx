import React from "react";

const GoalCard = ({ goal, onDelete, onToggle }) => {
  return (
    <div
      className={`p-4 rounded-xl shadow-md flex items-center justify-between mb-4 ${
        goal.completed ? "bg-green-100" : "bg-white"
      }`}
    >
      <div>
        <h2
          className={`text-xl font-semibold ${
            goal.completed ? "line-through text-gray-500" : ""
          }`}
        >
          {goal.title}
        </h2>
        <p
          className={`text-gray-700 ${
            goal.completed ? "line-through text-gray-400" : ""
          }`}
        >
          {goal.description}
        </p>
      </div>

      <div className="flex items-center gap-2">
        {/* ✅ Completion Toggle */}
        <input
          type="checkbox"
          checked={goal.completed}
          onChange={() => onToggle(goal.id, !goal.completed)}
          className="w-5 h-5 cursor-pointer"
        />

        {/* ❌ Delete Button */}
        <button
          onClick={() => onDelete(goal.id)}
          className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default GoalCard;
