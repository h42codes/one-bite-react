import React, { useContext, useRef, useState } from "react";
import { DiaryDispatchContext } from "./App";

// onCreate gets recreated everytime App gets created, which causes
// DiaryEditor to be rerendered again and again...
const DiaryEditor = () => {
  const { onCreate } = useContext(DiaryDispatchContext);

  const authorInput = useRef();
  const contentInput = useRef();

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
    if (state.author.length < 1) {
      // alert("Dairy requires an author");
      authorInput.current.focus();
      return;
    }
    if (state.content.length < 5) {
      // alert("Diary content should be longer than five characters.");
      contentInput.current.focus();
      return;
    }
    onCreate(state.author, state.content, state.score);
    alert("Save Success!");
    setState({
      author: "",
      content: "",
      score: 1,
    });
  };

  return (
    <div className="DiaryEditor">
      <h2>Today's Diary</h2>
      <div>
        <input
          ref={authorInput}
          name="author"
          value={state.author}
          onChange={handleStateChange}
        />
      </div>
      <div>
        <textarea
          ref={contentInput}
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

export default React.memo(DiaryEditor);
