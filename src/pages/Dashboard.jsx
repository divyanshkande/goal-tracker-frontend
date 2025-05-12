import React, { useEffect, useState } from "react";
    import GoalList from "../components/GoalList";
    import GoalForm from "../components/GoalForm";
    import axios from "axios";

    const Dashboard = () => {
      const [goals, setGoals] = useState([]);
      const [error, setError] = useState(null);

      useEffect(() => {
        fetchGoals();
      }, []);

      const fetchGoals = async () => {
        try {
          const token = localStorage.getItem("token");
          const response = await axios.get("http://localhost:8080/api/goals", {
            headers: { Authorization: `Bearer ${token}` },
            withCredentials: true,
          });
          setGoals(response.data);
          setError(null);
        } catch (error) {
          console.error("Error fetching goals:", error);
          setGoals([]);
          setError("Failed to load goals. Please try again later.");
        }
      };

      const deleteGoal = async (id) => {
        try {
          const token = localStorage.getItem("token");
          await axios.delete(`http://localhost:8080/api/goals/${id}`, {
            headers: { Authorization: `Bearer ${token}` },
            withCredentials: true,
          });
          setGoals((prev) => prev.filter((goal) => goal.id !== id));
        } catch (error) {
          console.error("Error deleting goal:", error);
          setError("Failed to delete goal.");
        }
      };

      const updateGoal = async (updatedGoal) => {
        try {
          const token = localStorage.getItem("token");
          await axios.put(
            `http://localhost:8080/api/goals/${updatedGoal.id}`,
            updatedGoal,
            {
              headers: { Authorization: `Bearer ${token}` },
              withCredentials: true,
            }
          );
          setGoals((prev) =>
            prev.map((goal) => (goal.id === updatedGoal.id ? updatedGoal : goal))
          );
        } catch (error) {
          console.error("Error updating goal:", error);
          setError("Failed to update goal.");
        }
      };

      return (
        <div className="p-6 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">🎯 Your Goals</h2>
          {error && (
            <p className="text-center text-red-500 mb-4">{error}</p>
          )}
          <GoalForm onGoalAdded={fetchGoals} />
          {goals.length === 0 ? (
            <p className="text-center text-gray-500">No goals found. Add a new goal to get started!</p>
          ) : (
            <GoalList goals={goals} onDelete={deleteGoal} onUpdate={updateGoal} />
          )}
        </div>
      );
    };

    export default Dashboard;