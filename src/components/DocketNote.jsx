import React, { useMemo, useState } from 'react';
import '../App.css';
import { ListNote } from './ListNote';
import Panel from './Panel';
import SearchField from './SearchField';

// const NOTES = [
//   {
//     id: 0,
//     content:
//       'The beginning of screenless design: UI jobs to be taken over by Solution Architect',
//     createdAt: 1657432075944,
//     isStarred: false,
//     color: '#FFA940',
//   },
//   {
//     id: 1,
//     content:
//       'The beginning of screenless design: UI jobs to be taken over by Solution Architect',
//     createdAt: 1657432075944,
//     isStarred: true,
//     color: '#FADB14',
//   },
//   {
//     id: 2,
//     content:
//       'The beginning of screenless design: UI jobs to be taken over by Solution Architect',
//     createdAt: 1657432075944,
//     isStarred: false,
//     color: '#FFA940',
//   },
//   {
//     id: 3,
//     content:
//       'The beginning of screenless design: UI jobs to be taken over by Solution Architect',
//     createdAt: 1657432075944,
//     isStarred: false,
//     color: '#2F54EB',
//   },
//   {
//     id: 4,
//     content:
//       'The beginning of screenless design: UI jobs to be taken over by Solution Architect',
//     createdAt: 1657432075944,
//     isStarred: true,
//     color: '#20C950',
//   },
//   {
//     id: 5,
//     content:
//       'The beginning of screenless design: UI jobs to be taken over by Solution Architect',
//     createdAt: 1657432075944,
//     isStarred: false,
//     color: '#722ED1',
//   },
// ];

function DocketNote() {
  const [notes, setNotes] = useState([]);
  const [searchKey, setSearchKey] = useState('');
  const [searchNotes, setSearchNotes] = useState([]);

  const displayNotes = useMemo(
    () => (searchKey ? searchNotes : notes),
    [searchKey, searchNotes, notes]
  );

  const onCreateNote = (color) => {
    if (searchKey) return;
    const newNote = {
      id: Math.random().toString(32).slice(-7),
      content: '',
      createdAt: new Date().getTime(),
      isStarred: false,
      isCreating: true,
      color,
    };
    setNotes([newNote, ...notes]);
  };
  const onUpdate = (note) => {
    const updatedNotes = notes.map((item) => {
      if (note.id === item.id) {
        return {
          ...note,
          isCreating: false,
        };
      }
      return item;
    });
    setNotes(updatedNotes);
  };
  const onSearch = (key) => {
    setSearchKey(key);
    if (key === '') {
      setSearchNotes([])
      return
    }
    const searchNotes = notes.filter(
      (note) => note.content.toLowerCase().indexOf(key.toLowerCase()) > -1
    );
    setSearchNotes(searchNotes);
  };
  return (
    <div className="docket-note">
      <Panel onCreateNote={onCreateNote} />
      <div className="note-wrapper">
        <SearchField searchKey={searchKey} onSearch={onSearch} />
        <main>
          <h1>Notes</h1>
          <ListNote notes={displayNotes} onUpdate={onUpdate} />
        </main>
      </div>
    </div>
  );
}

export default DocketNote;
