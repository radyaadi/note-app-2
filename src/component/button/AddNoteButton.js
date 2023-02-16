import React from 'react';
import { FiPlus } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

const AddNoteButton = () => {
  const navigate = useNavigate();

  return (
    <div className="homepage__action">
      <button
        className="action"
        type="button"
        title="Add Note"
        onClick={() => navigate('/notes/new')}
      >
        <FiPlus />
      </button>
    </div>
  );
};

export default AddNoteButton;
