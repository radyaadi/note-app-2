import React from 'react';
import { showFormattedDate } from '../util/dateFormatter';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const NoteItem = ({ id, title, body, createdAt }) => {
  return (
    <article className="note-item">
      <h3 className="note-item__title">
        <Link to={`/note/${id}`}>{title}</Link>
      </h3>
      <p className="note-item__createdAt">{showFormattedDate(createdAt)}</p>
      <p className="detail-page__body">{body}</p>
    </article>
  );
};

NoteItem.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default NoteItem;
