import GoalCard from "./GoalCard";

const GoalList = ({ goals }) => {
  if (goals.length === 0) {
    return <p className="text-gray-600 mt-6">No goals added yet.</p>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 px-4">
      {goals.map((goal) => (
        <GoalCard key={goal.id} goal={goal} />
      ))}
    </div>
  );
};

export default GoalList;
