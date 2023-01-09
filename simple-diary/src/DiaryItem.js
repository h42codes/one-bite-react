import React, { useState, useRef, useEffect } from "react";

const DiaryItem = ({
  onRemove,
  onEdit,
  id,
  author,
  content,
  score,
  created_date,
}) => {
  useEffect(() => console.log(`Rendering DiaryItem ${id}...`));

  const [isEdit, setIsEdit] = useState(false);
  const [localContent, setLocalContent] = useState(content);
  const localContentInput = useRef();

  const handleRemove = () => {
    if (window.confirm(`Deleting Dairy #${id}?`)) {
      onRemove(id);
    }
  };

  const handleQuitEdit = () => {
    setIsEdit(false);
    setLocalContent(content);
  };

  const handleEdit = () => {
    if (localContent.length < 5) {
      localContentInput.current.focus();
      return;
    }

    if (window.confirm(`Editing Diary #${id}?`)) {
      onEdit(id, localContent);
      setIsEdit(false);
    }
  };

  const toggleIsEdit = () => {
    setIsEdit(!isEdit);
  };

  const handleContentChange = (e) => {
    setLocalContent(e.target.value);
  };

  return (
    <div className="DiaryItem">
      <div className="info">
        <span>
          Writte by {author} | Mood Score: {score}
        </span>
        <br />
        <span className="date">{new Date(created_date).toLocaleString()}</span>
      </div>
      <div className="content">
        {isEdit ? (
          <>
            <textarea
              ref={localContentInput}
              value={localContent}
              onChange={handleContentChange}
            ></textarea>
          </>
        ) : (
          <>{localContent}</>
        )}
      </div>
      {isEdit ? (
        <>
          <button onClick={handleQuitEdit}>Cancel Edit</button>
          <button onClick={handleEdit}>Save Edit</button>
        </>
      ) : (
        <>
          <button onClick={handleRemove}>Delete</button>
          <button onClick={toggleIsEdit}>Edit</button>
        </>
      )}
    </div>
  );
};

export default React.memo(DiaryItem);
