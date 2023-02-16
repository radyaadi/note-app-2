import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { archiveNote, deleteNote, getNote, unarchiveNote } from '../util/api';
import NoteDetail from '../component/NoteDetail';

const NoteDetailPage = () => {
  const [note, setNote] = useState({});
  const [loading, setLoading] = useState(true);

  const { id } = useParams();
  const navigate = useNavigate();

  const onUnarchiveNoteHandler = () => {
    let methods = null;
    let navigateTo = '/';

    if (note.archived) {
      methods = unarchiveNote(id);
      navigateTo = '/archives';
    } else {
      methods = archiveNote(id);
    }

    methods.then((res) => {
      if (!res.error) {
        navigate(navigateTo);
      }
    });
  };

  const onDeleteClickHandler = () => {
    deleteNote(id).then((res) => {
      if (!res.error) {
        navigate('/');
      }
    });
  };

  useEffect(() => {
    getNote(id).then((res) => {
      if (!res.error) {
        setNote(res.data);
      }
      setLoading(false);
    });
  }, [id]);

  return loading === true ? (
    'Loading...'
  ) : (
    <section className="detail-page">
      <NoteDetail
        {...note}
        onArchive={onUnarchiveNoteHandler}
        onDelete={onDeleteClickHandler}
      />
    </section>
  );
};

export default NoteDetailPage;
