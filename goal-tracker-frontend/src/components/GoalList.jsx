import React from 'react';
import GoalCard from './GoalCard'; // ✅ Make sure this path is correct

function GoalList() {
  const dummyGoals = [
    { id: 1, title: 'Learn React', description: 'Understand components and hooks.' },
    { id: 2, title: 'Build a project', description: 'Use React with Tailwind.' },
  ];

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 p-4">
      {dummyGoals.map(goal => (
        <GoalCard key={goal.id} title={goal.title} description={goal.description} />
      ))}
    </div>
  );
}

export default GoalList;
