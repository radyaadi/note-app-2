import React, { useContext } from 'react';
import LocaleContext from '../context/LocaleContext';
import NoteItem from './NoteItem';
import PropTypes from 'prop-types';

const NoteList = ({ notes }) => {
  const { locale } = useContext(LocaleContext);

  if (!notes.length) {
    return (
      <section className="notes-list-empty">
        <p className="notes-list__empty">
          {locale === 'id' ? 'Catatan tidak tersedia' : 'No note available'}
        </p>
      </section>
    );
  }

  return (
    <section className="notes-list">
      {notes.map((note) => (
        <NoteItem key={note.id} {...note} />
      ))}
    </section>
  );
};

NoteList.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default NoteList;
