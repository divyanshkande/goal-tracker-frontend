import React, { useEffect, useState } from "react";
import GoalForm from "../components/GoalForm";
import GoalList from "../components/GoalList";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const [goals, setGoals] = useState([]);
  const username = localStorage.getItem("username");
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  // 🔓 Redirect if not logged in
  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [token, navigate]);

  // 🎯 Fetch user-specific goals
  useEffect(() => {
    fetch("http://localhost:8080/api/goals", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setGoals(data))
      .catch((err) => console.error("Error loading goals:", err));
  }, [token]);

  // ➕ Add goal
  const handleAddGoal = (goalData) => {
    fetch("http://localhost:8080/api/goals", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(goalData),
    })
      .then((res) => res.json())
      .then((savedGoal) => setGoals((prev) => [...prev, savedGoal]))
      .catch((err) => console.error("Error adding goal:", err));
  };

  // ❌ Delete goal
  const handleDeleteGoal = (id) => {
    fetch(`http://localhost:8080/api/goals/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(() => {
        setGoals((prev) => prev.filter((goal) => goal.id !== id));
      })
      .catch((err) => console.error("Error deleting goal:", err));
  };

  // ✏️ Update goal
  const handleUpdateGoal = (updatedGoal) => {
    fetch(`http://localhost:8080/api/goals/${updatedGoal.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(updatedGoal),
    })
      .then((res) => res.json())
      .then((data) => {
        setGoals((prev) =>
          prev.map((goal) => (goal.id === data.id ? data : goal))
        );
      })
      .catch((err) => console.error("Error updating goal:", err));
  };

  // ✅ Toggle complete/incomplete
  const handleToggleGoal = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:8080/api/goals/${id}/toggle`,
        {
          method: "PATCH",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.ok) {
        const updatedGoal = await response.json();
        setGoals((prevGoals) =>
          prevGoals.map((goal) => (goal.id === id ? updatedGoal : goal))
        );
      }
    } catch (error) {
      console.error("Error toggling goal completion", error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 via-white to-blue-100 px-4 py-6 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-2xl p-6 sm:p-8">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-center text-blue-700 mb-6">
          🎯 Welcome {username} – Your Goal Tracker
        </h1>

        <GoalForm onAdd={handleAddGoal} />
        <GoalList
          goals={goals}
          onDelete={handleDeleteGoal}
          onUpdate={handleUpdateGoal}
          onToggle={handleToggleGoal}
        />
      </div>
    </div>
  );
};

export default HomePage;
