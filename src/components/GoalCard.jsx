import React from "react";

const GoalCard = ({ goal, onDelete, onUpdate }) => {
  const handleToggleComplete = () => {
    const updatedGoal = { ...goal, completed: !goal.completed };
    onUpdate(updatedGoal);
  };

  return (
    <div className="bg-white rounded-2xl shadow-md p-5 flex flex-col justify-between min-h-[180px] transition-transform hover:scale-[1.02]">
      <div>
        <h3
          className={`text-xl font-bold mb-1 ${
            goal.completed ? "line-through text-gray-500" : "text-gray-800"
          }`}
        >
          {goal.title}
        </h3>
        <p className="text-gray-600 text-sm">{goal.description}</p>
      </div>

      <div className="mt-4 flex justify-between items-center flex-wrap gap-2">
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={goal.completed}
            onChange={handleToggleComplete}
            className="w-4 h-4"
          />
          <label className="text-sm font-medium text-gray-700">Completed</label>
        </div>

        <button
          onClick={() => onDelete(goal.id)}
          className="bg-red-500 hover:bg-red-600 text-white px-3 py-1.5 rounded-lg text-sm transition"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default GoalCard;
