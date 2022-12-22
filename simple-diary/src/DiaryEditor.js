import { useState } from "react";
const DiaryEditor = () => {
  const [state, setState] = useState({
    author: "",
    content: "",
    score: 1,
  });

  const handleStateChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    console.log(state);
    alert("Save Success!");
  };

  return (
    <div className="DiaryEditor">
      <h2>Today's Diary</h2>
      <div>
        <input
          name="author"
          value={state.author}
          onChange={handleStateChange}
        />
      </div>
      <div>
        <textarea
          name="content"
          value={state.content}
          onChange={handleStateChange}
        />
      </div>
      <div>
        <span>Today's Mood Score : </span>
        <select name="score" value={state.score} onChange={handleStateChange}>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>
      </div>
      <div>
        <button onClick={handleSubmit}>Save Diary</button>
      </div>
    </div>
  );
};

export default DiaryEditor;
