import { useState } from "react";
import axios from "axios";

const GoalForm = ({ onGoalAdded }) => {
  const [title, setTitle] = useState("");  // Renamed 'text' to 'title'
  const [description, setDescription] = useState("");  // Add a description input field

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim() || !description.trim()) return;  // Ensure both fields are non-empty

    try {
      // Send the goal data to the backend
      await axios.post(
        "http://localhost:8080/api/goals",
        { title, description },  // Ensure this matches your backend API structure
        { withCredentials: true }  // Include credentials (cookies, authorization headers)
      );
      setTitle("");
      setDescription("");  // Reset description field
      onGoalAdded();  // Callback to refresh goal list after adding
    } catch (err) {
      console.error("Error adding goal:", err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter a new goal title"
        className="border px-4 py-2 rounded w-full"
      />
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Enter a description"
        className="border px-4 py-2 rounded w-full"
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
