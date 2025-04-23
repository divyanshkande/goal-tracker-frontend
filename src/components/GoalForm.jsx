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

    onAdd(newGoal);
    setTitle("");
    setDescription("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-5 rounded-2xl shadow-md mb-6 space-y-4 sm:space-y-0 sm:flex sm:gap-4 sm:items-center"
    >
      <input
        type="text"
        placeholder="Enter goal title..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="flex-1 border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <textarea
        placeholder="Enter goal description..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        rows={2}
        className="flex-1 border border-gray-300 rounded-lg px-4 py-2 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <button
        type="submit"
        className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-lg transition"
      >
        Add Goal
      </button>
    </form>
  );
};

export default GoalForm;
