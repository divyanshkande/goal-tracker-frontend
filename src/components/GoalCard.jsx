import React from "react";

const GoalCard = ({ goal, onDelete, onUpdate }) => {
  const handleToggleComplete = () => {
    const updatedGoal = { ...goal, completed: !goal.completed };
    onUpdate(updatedGoal);
  };

  return (
    <div className="bg-white p-4 rounded shadow mb-2">
      <h3 className={`text-xl font-semibold ${goal.completed ? "line-through text-gray-500" : ""}`}>
        {goal.title}
      </h3>
      <p>{goal.description}</p>
      <div className="mt-2 flex gap-2 items-center">
        <button
          onClick={() => onDelete(goal.id)}
          className="bg-red-500 text-white px-2 py-1 rounded"
        >
          Delete
        </button>

        <label className="flex items-center gap-1">
          <input
            type="checkbox"
            checked={goal.completed}
            onChange={handleToggleComplete}
          />
          Completed
        </label>
      </div>
    </div>
  );
};

export default GoalCard;
