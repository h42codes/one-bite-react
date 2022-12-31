import { useState, useRef, useEffect } from "react";
import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";
import "./App.css";

function App() {
  const [data, setData] = useState([]);

  const dataId = useRef(0);

  const getData = async () => {
    const res = await fetch(
      "https://jsonplaceholder.typicode.com/comments"
    ).then((res) => res.json());

    const initData = res.slice(0, 20).map((item) => {
      return {
        author: item.email,
        content: item.body,
        score: Math.floor(Math.random() * 5) + 1,
        created_date: new Date().getTime(),
        id: dataId.current++,
      };
    });

    setData(initData);
  };

  useEffect(() => {
    getData();
  }, []);

  const onCreate = (author, content, score) => {
    const created_date = new Date().getTime();
    const newItem = {
      author,
      content,
      score,
      created_date,
      id: dataId.current,
    };
    dataId.current += 1;
    setData([newItem, ...data]);
  };

  const onRemove = (targetId) => {
    const newDiaryList = data.filter((data) => data.id !== targetId);
    setData(newDiaryList);
  };

  const onEdit = (targetId, newContent) => {
    setData(
      data.map((item) =>
        item.id === targetId ? { ...item, content: newContent } : item
      )
    );
  };

  const getDiaryAnalysis = () => {
    console.log("Start analysis");

    const goodCount = data.filter((item) => item.score >= 3).length;
    const badCount = data.length - goodCount;
    const goodRatio = (goodCount / data.length) * 100;
    return { goodCount, badCount, goodRatio };
  };

  const { goodCount, badCount, goodRatio } = getDiaryAnalysis();

  return (
    <div className="App">
      <DiaryEditor onCreate={onCreate} />
      <div>Total Count: {data.length}</div>
      <div>Good Count: {goodCount}</div>
      <div>Bad Count: {badCount}</div>
      <div>Good Ratio: {goodRatio}</div>
      <DiaryList onRemove={onRemove} onEdit={onEdit} diaryList={data} />
    </div>
  );
}

export default App;
