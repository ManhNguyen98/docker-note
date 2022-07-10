import React, { useEffect, useRef, useState } from 'react';
import { ReactComponent as IconStar } from '../assets/icons/icon-star.svg';
import { ReactComponent as IconPencil } from '../assets/icons/icon-pencil.svg';
import { ReactComponent as IconClose } from '../assets/icons/icon-xmark.svg';
import { ReactComponent as IconCheck } from '../assets/icons/icon-check.svg';

const NoteItem = ({ data, onUpdate }) => {
  const { content: contentProps, createdAt, isStarred, color, isCreating } = data;
  const [isEdit, setIsEdit] = useState(false);
  const [content, setContent] = useState(contentProps)
  const ref = useRef();
  
  const onToggleEdit = () => {
    setIsEdit(!isEdit);
    if (!isEdit) {
      ref.current.focus();
    }
  };

  const onSave = () => {
    setIsEdit(false)
    onUpdate({...data, content})
  }

  const onCancel = () => {
    setIsEdit(false)
    setContent(contentProps)
  }

  const onChange = (e) => {
    const {value} = e.target
    setContent(value)
  }

  const onKeydown = (e) => {
    if (e.key === 'Escape') {
      setIsEdit(false)
      setContent(contentProps)
    }
    if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) {
      onSave()
    }
  }

  useEffect(() => {
    if (isEdit) {
      if (ref) {
        ref.current.focus()
        ref.current.setSelectionRange(ref.current.value.length, ref.current.value.length)
      }
    }
  }, [isEdit])

  useEffect(() => {
    if (isCreating) {
      setIsEdit(true)
    }
  }, [isCreating])

  return (
    <div className="note-item" style={{ backgroundColor: color }}>
      <textarea
        disabled={!isEdit}
        className="note-item-content"
        ref={ref}
        value={content}
        onChange={onChange}
        onKeyDown={onKeydown}
      />
      {isStarred && (
        <button className="btn btn-star">
          <IconStar fill="#FADB14" />
        </button>
      )}
      <div className="note-item-metadata">
        <span className="note-item-createdAt">
          {new Date(createdAt).toDateString()}
        </span>
        <div style={{display: 'flex'}}>
          {isEdit ? (
            <>
              <button className="btn btn-edit" onClick={onSave} style={{marginRight: 4}}>
                <IconCheck width={16} height={16} fill="#fff" />
              </button>
              <button className="btn btn-edit" onClick={onCancel}>
                <IconClose width={16} height={16} fill="#fff" />
              </button>
            </>
          ): (
            <button className="btn btn-edit" onClick={onToggleEdit}>
              <IconPencil width={16} height={16} fill="#fff" />
          </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default NoteItem;
