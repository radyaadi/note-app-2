import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { showFormattedDate } from '../util/dateFormatter';
import LocaleContext from '../context/LocaleContext';
import PropTypes from 'prop-types';

const NoteItem = ({ id, title, body, createdAt }) => {
  const { locale } = useContext(LocaleContext);

  return (
    <article className="note-item">
      <h3 className="note-item__title">
        <Link to={`/note/${id}`}>{title}</Link>
      </h3>
      <p className="note-item__createdAt">
        {showFormattedDate(createdAt, locale)}
      </p>
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
