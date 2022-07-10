import React from 'react'
import Empty from './Empty'
import NoteItem from './NoteItem'

export const ListNote = ({notes, onUpdate}) => {
  if (notes.length === 0) return <Empty />
  return (
    <div className='list-note-wrapper'>
      {
        notes.map(note => <NoteItem data={note} key={note.id} onUpdate={onUpdate}/>)
      }
    </div>
  )
}
