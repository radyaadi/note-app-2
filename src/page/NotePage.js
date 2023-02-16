import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getActiveNotes } from '../util/api';
import LocaleContext from '../context/LocaleContext';
import NoteList from '../component/NoteList';
import SearchBar from '../component/SearchBar';
import AddNoteButton from '../component/button/AddNoteButton';

const NotePage = () => {
  const [notes, setNotes] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [loading, setLoading] = useState(true);
  const [keyword, setKeyword] = useState(() => {
    return searchParams.get('keyword') || '';
  });

  const { locale } = React.useContext(LocaleContext);

  useEffect(() => {
    getActiveNotes().then((res) => {
      if (!res.error) {
        setNotes(res.data);
        setLoading(false);
      }
    });

    return () => {
      setLoading(true);
    };
  }, []);

  const onKeywordChangeHandler = (keyword) => {
    setKeyword(keyword);
    setSearchParams({ keyword });
  };

  const filteredNote = notes.filter((note) => {
    return note.title.toLowerCase().includes(keyword.toLowerCase());
  });

  return loading === true ? (
    'Loading...'
  ) : (
    <section className="homepage">
      <h2>{locale === 'id' ? 'Catatan Aktif' : 'Active Note'}</h2>
      <SearchBar keyword={keyword} keywordChange={onKeywordChangeHandler} />
      {loading === true ? 'Loading...' : <NoteList notes={filteredNote} />}
      <AddNoteButton />
    </section>
  );
};

export default NotePage;
