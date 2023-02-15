import React from 'react';
import NoteItem from './NoteItem';
import PropTypes from 'prop-types';

const NoteList = ({ notes }) => {
  if (!notes.length) {
    return (
      <section className="notes-list-empty">
        <p className="notes-list__empty">no note available</p>
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
