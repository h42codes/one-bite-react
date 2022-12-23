import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";
import "./App.css";

const dummyList = [
  {
    id: 1,
    author: "HJ",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ante in nibh mauris cursus mattis. Sit amet facilisis magna etiam tempor orci eu.",
    score: 5,
    created_date: new Date().getTime(),
  },
  {
    id: 2,
    author: "HJ",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dictum non consectetur a erat nam at lectus urna. Arcu ac tortor dignissim convallis aenean.",
    score: 5,
    created_date: new Date().getTime(),
  },
  {
    id: 3,
    author: "HJ",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dictum non consectetur a erat nam at lectus urna. Arcu ac tortor dignissim convallis aenean.",
    score: 2,
    created_date: new Date().getTime(),
  },
  {
    id: 4,
    author: "HJ",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dictum non consectetur a erat nam at lectus urna. Arcu ac tortor dignissim convallis aenean.",
    score: 5,
    created_date: new Date().getTime(),
  },
  {
    id: 5,
    author: "HJ",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dictum non consectetur a erat nam at lectus urna. Arcu ac tortor dignissim convallis aenean.",
    score: 4,
    created_date: new Date().getTime(),
  },
];

function App() {
  return (
    <div className="App">
      <DiaryEditor />
      <DiaryList diaryList={dummyList} />
    </div>
  );
}

export default App;
