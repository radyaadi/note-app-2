import React from 'react';
import PropTypes from 'prop-types';
import { FiTrash } from 'react-icons/fi';

function DeleteNoteButton({ id, onDelete }) {
  return (
    <button className="action" title="Delete Note" onClick={() => onDelete(id)}>
      <FiTrash />
    </button>
  );
}

DeleteNoteButton.propTypes = {
  id: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default DeleteNoteButton;
