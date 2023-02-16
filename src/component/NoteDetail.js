import React from 'react';
import PropTypes from 'prop-types';
import { showFormattedDate } from '../util/dateFormatter';
import DeleteNoteButton from './button/DeleteNoteButton';
import ArchiveNoteButton from './button/ArchiveNoteButton';

const NoteDetail = ({
  id,
  title,
  body,
  createdAt,
  archived,
  onArchive,
  onDelete,
}) => {
  return (
    <>
      <h3 className="detail-page__title">{title}</h3>
      <p className="detail-page__createdAt">{showFormattedDate(createdAt)}</p>
      <div className="detail-page__body">{body}</div>
      <div className="detail-page__action">
        <DeleteNoteButton id={id} onDelete={onDelete} />
        <ArchiveNoteButton
          id={id}
          onArchive={onArchive}
          isArchived={archived}
        />
      </div>
    </>
  );
};

NoteDetail.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  archived: PropTypes.bool.isRequired,
  onArchive: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default NoteDetail;
