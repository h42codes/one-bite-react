const DiaryItem = ({ onRemove, id, author, content, score, created_date }) => {
  const handleRemove = () => {
    if (window.confirm(`Deleting Dairy #${id}?`)) {
      onRemove(id);
    }
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
      <div className="content">{content}</div>
      <button onClick={handleRemove}>Delete</button>
      <button>Edit</button>
    </div>
  );
};

export default DiaryItem;
