import { useState } from "react";

const GoalForm = ({ onAddGoal }) => {
  const [goalText, setGoalText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (goalText.trim() === "") return;
    onAddGoal(goalText);
    setGoalText("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mt-4 justify-center">
      <input
        type="text"
        value={goalText}
        onChange={(e) => setGoalText(e.target.value)}
        placeholder="Enter a goal"
        className="border rounded px-4 py-2 w-1/2"
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Add Goal
      </button>
    </form>
  );
};

export default GoalForm;
