import { useState } from "react";

const DiaryItem = ({ onRemove, id, author, content, score, created_date }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [localContent, setLocalContent] = useState(content);

  const handleRemove = () => {
    if (window.confirm(`Deleting Dairy #${id}?`)) {
      onRemove(id);
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
              value={localContent}
              onChange={handleContentChange}
            ></textarea>
          </>
        ) : (
          <>{localContent}</>
        )}
      </div>
      <button onClick={handleRemove}>Delete</button>
      <button onClick={toggleIsEdit}>Edit</button>
    </div>
  );
};

export default DiaryItem;
