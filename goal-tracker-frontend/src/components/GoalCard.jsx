import React from 'react';

function GoalCard({ title, description }) {
  return (
    <div className="p-4 bg-white shadow rounded-lg">
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  );
}

export default GoalCard;
