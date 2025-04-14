import React, { useState } from "react";

const GoalForm = ({ onAdd }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !description.trim()) return;

    const newGoal = {
      title,
      description,
      completed: false,
    };

    onAdd(newGoal); // Send to parent
    setTitle("");
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
      <input
        type="text"
        placeholder="Goal Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="flex-1 p-2 border border-gray-300 rounded"
      />
      <textarea
        placeholder="Goal Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="flex-1 p-2 border border-gray-300 rounded"
      />
      <button
        type="submit"
        className="bg-black text-white px-4 py-2 rounded border-2 border-black hover:bg-white hover:text-black"
      >
        Add Goal
      </button>
    </form>
  );
};

export default GoalForm;
