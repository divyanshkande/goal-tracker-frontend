

import React, { useState } from 'react';


const GoalCard = ({ goal, onDelete, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(goal.title);
  const [editedDescription, setEditedDescription] = useState(goal.description);

  const handleSave = () => {
    onUpdate(goal.id, {
      title: editedTitle,
      description: editedDescription,
    });
    setIsEditing(false);
  };

  return (
    <div className="border p-4 rounded shadow mb-4">
      {isEditing ? (
        <>
          <input
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
            className="border p-1 w-full mb-2"
          />
          <textarea
            value={editedDescription}
            onChange={(e) => setEditedDescription(e.target.value)}
            className="border p-1 w-full mb-2"
          />
          <button onClick={handleSave} className="bg-blue-500 text-white px-2 py-1 rounded mr-2">
            Save
          </button>
        </>
      ) : (
        <>
          <h3 className="text-xl font-semibold">{goal.title}</h3>
          <p>{goal.description}</p>
        </>
      )}
      <button onClick={() => onDelete(goal.id)} className="text-red-500 mr-2">
        Delete
      </button>
      <button onClick={() => setIsEditing(!isEditing)} className="text-blue-500">
        {isEditing ? "Cancel" : "Edit"}
      </button>
    </div>
  );
};

export default GoalCard;
