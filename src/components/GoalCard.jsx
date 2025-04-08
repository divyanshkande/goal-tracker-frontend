// components/GoalCard.jsx
function GoalCard({ goal }) {
  return (
    <div className="bg-white shadow-lg rounded-2xl p-4 border hover:shadow-xl transition duration-300 max-w-md mx-auto">

      <h2 className="text-xl font-semibold mb-2">{goal.title}</h2>
      <p className="text-gray-600 mb-4">{goal.description}</p>
      <p className={`font-bold ${goal.completed ? 'text-green-600' : 'text-red-600'}`}>
        {goal.completed ? 'Completed ✅' : 'Pending ⏳'}
      </p>
    </div>
  );
}

export default GoalCard;
