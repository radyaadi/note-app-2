import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FiCheck } from 'react-icons/fi';
import useInput from '../hook/useInput';
import { addNote } from '../util/api';

function AddPage() {
  const [title, onTitleChange] = useInput('');
  const [body, onBodyChange] = useInput('');
  const navigate = useNavigate();

  const onAddNoteHandler = () => {
    addNote({ title, body }).then((res) => {
      if (!res.error) {
        navigate('/');
      }
    });
  };

  return (
    <section className="add-new-page">
      <div className="add-new-page__input">
        <input
          type="text"
          className="add-new-page__input__title"
          placeholder="Add your title here"
          value={title}
          onChange={onTitleChange}
        />
        <textarea
          className="add-new-page__input__body"
          placeholder="Add your note here"
          value={body}
          onInput={onBodyChange}
        />
      </div>
      <div className="add-new-page__action">
        <button
          className="action"
          type="button"
          title="simpan"
          onClick={onAddNoteHandler}
        >
          <FiCheck />
        </button>
      </div>
    </section>
  );
}

export default AddPage;
