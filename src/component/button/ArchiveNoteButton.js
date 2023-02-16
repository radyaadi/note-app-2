import React from 'react';
import PropTypes from 'prop-types';
import { FiDownload, FiUpload } from 'react-icons/fi';

function ArchiveNoteButton({ id, onArchive, isArchived }) {
  return (
    <button
      className="action"
      title={isArchived ? 'Activate Note' : 'Archive Note'}
      onClick={() => onArchive(id)}
    >
      {isArchived ? <FiUpload /> : <FiDownload />}
    </button>
  );
}

ArchiveNoteButton.propTypes = {
  id: PropTypes.string.isRequired,
  onArchive: PropTypes.func.isRequired,
  isArchived: PropTypes.bool.isRequired,
};

export default ArchiveNoteButton;
