const DiaryItem = ({ onRemove, id, author, content, score, created_date }) => {
  return (
    <div className="DiaryItem">
      <div className="info">
        <span>
          Writte by {author} | Mood Score: {score}
        </span>
        <br />
        <span className="date">{new Date(created_date).toLocaleString()}</span>
      </div>
      <div className="content">{content}</div>
      <button
        onClick={() => {
          if (window.confirm(`Deleting Dairy #${id}?`)) {
            onRemove(id);
          }
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default DiaryItem;
