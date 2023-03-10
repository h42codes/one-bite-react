import { useContext } from "react";
import { DiaryStateContext } from "./App";
import DiaryItem from "./DiaryItem";

const DiaryList = () => {
  const diaryList = useContext(DiaryStateContext);
  return (
    <div className="DiaryList">
      <h2>Diary List</h2>
      <h4>Total of {diaryList.length} diaries</h4>
      <div>
        {diaryList.map((diary) => (
          <DiaryItem key={diary.id} {...diary} />
        ))}
      </div>
    </div>
  );
};

DiaryList.defaultProps = {
  // set default values for props that might be undefined
  diaryList: [],
};

export default DiaryList;
