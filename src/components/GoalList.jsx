// components/GoalList.jsx
import GoalCard from './GoalCard'

function GoalList({ goals }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {goals.map((goal) => (
        <GoalCard key={goal.id} goal={goal} />
      ))}
    </div>
  );
}

export default GoalList;
