import React, {
  useCallback,
  useMemo,
  useRef,
  useEffect,
  useReducer,
} from "react";
import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";
import "./App.css";

const reducer = (state, action) => {
  switch (action.type) {
    case "INIT": {
      return action.data; // becomes the new state
    }
    case "CREATE": {
      const created_date = new Date().getTime();
      const newItem = {
        ...action.data,
        created_date,
      };
      return [newItem, ...state];
    }
    case "REMOVE": {
      return state.filter((item) => item.id !== action.targetId);
    }
    case "EDIT": {
      return state.map((item) =>
        item.id === action.targetId
          ? { ...item, content: action.newContent }
          : item
      );
    }
    default:
      return state;
  }
};

export const DiaryStateContext = React.createContext();
export const DiaryDispatchContext = React.createContext();

function App() {
  const [data, dispatch] = useReducer(reducer, []);

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

    dispatch({ type: "INIT", data: initData });
    // setData(initData);
  };

  useEffect(() => {
    getData();
  }, []);

  const onCreate = useCallback((author, content, score) => {
    dispatch({
      type: "CREATE",
      data: { author, content, score, id: dataId.current },
    });
    dataId.current += 1;
    // Use functional update to avoid rendering only one diary item
    // setData((data) => [newItem, ...data]);
  }, []);

  const onRemove = useCallback((targetId) => {
    dispatch({ type: "REMOVE", targetId });
    // setData((data) => data.filter((item) => item.id !== targetId));
  }, []);

  const onEdit = useCallback((targetId, newContent) => {
    dispatch({ type: "EDIT", targetId, newContent });
  }, []);

  const memoizedDispatches = useMemo(() => {
    return { onCreate, onRemove, onEdit };
  }, []);

  // useMemo returns value that is returned by the callback function inside it
  // which means, getDiaryAnalysis is no longer a function
  const getDiaryAnalysis = useMemo(() => {
    const goodCount = data.filter((item) => item.score >= 3).length;
    const badCount = data.length - goodCount;
    const goodRatio = (goodCount / data.length) * 100;
    return { goodCount, badCount, goodRatio };
  }, [data.length]);

  const { goodCount, badCount, goodRatio } = getDiaryAnalysis;

  return (
    <DiaryStateContext.Provider value={data}>
      <DiaryDispatchContext.Provider value={memoizedDispatches}>
        <div className="App">
          <DiaryEditor onCreate={onCreate} />
          <div>Total Count: {data.length}</div>
          <div>Good Count: {goodCount}</div>
          <div>Bad Count: {badCount}</div>
          <div>Good Ratio: {goodRatio}</div>
          <DiaryList onRemove={onRemove} onEdit={onEdit} />
        </div>
      </DiaryDispatchContext.Provider>
    </DiaryStateContext.Provider>
  );
}

export default App;
