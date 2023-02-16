import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getArchivedNotes } from '../util/api';
import NoteList from '../component/NoteList';
import SearchBar from '../component/SearchBar';

const ArchiveNotePage = () => {
  const [notes, setNotes] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [loading, setLoading] = useState(true);
  const [keyword, setKeyword] = useState(() => {
    return searchParams.get('keyword') || '';
  });

  useEffect(() => {
    getArchivedNotes().then((res) => {
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
      <h2>Active Note</h2>
      <SearchBar keyword={keyword} keywordChange={onKeywordChangeHandler} />
      {loading === true ? 'Loading...' : <NoteList notes={filteredNote} />}
    </section>
  );
};

export default ArchiveNotePage;
