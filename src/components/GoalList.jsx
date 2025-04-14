import React from "react";

const GoalList = ({ goals, onDelete }) => {
  if (!goals.length) {
    return <p className="text-center text-gray-500">No goals added yet.</p>;
  }

  return (
    <ul className="space-y-4">
      {goals.map((goal) => (
        <li
          key={goal.id}
          className="p-4 border border-gray-300 rounded shadow-sm flex justify-between items-start"
        >
          <div>
            <h2 className="text-xl font-semibold">{goal.title}</h2>
            <p className="text-gray-600">{goal.description}</p>
          </div>
          <button
            onClick={() => onDelete(goal.id)}
            className="text-red-500 hover:text-red-700 font-bold"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default GoalList;
