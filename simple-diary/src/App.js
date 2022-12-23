import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";
import "./App.css";

const dummyList = [
  {
    id: 1,
    author: "HJ",
    content: "Hello!",
    score: 5,
    created_date: new Date().getTime(),
  },
  {
    id: 2,
    author: "HJ",
    content: "Hello!",
    score: 5,
    created_date: new Date().getTime(),
  },
  {
    id: 3,
    author: "HJ",
    content: "New Year!",
    score: 2,
    created_date: new Date().getTime(),
  },
  {
    id: 4,
    author: "HJ",
    content: "Holiday!",
    score: 5,
    created_date: new Date().getTime(),
  },
  {
    id: 5,
    author: "HJ",
    content: "Bye!",
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
