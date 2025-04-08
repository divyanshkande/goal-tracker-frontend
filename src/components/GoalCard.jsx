const GoalCard = ({ goal }) => {
  return (
    <div className="bg-white shadow rounded p-4 hover:shadow-lg transition">
      <p>{goal.text}</p>
    </div>
  );
};

export default GoalCard;
