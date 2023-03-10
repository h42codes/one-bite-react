import { useEffect } from "react";
import DiaryEditor from "../components/DiaryEditor";

const New = () => {
  useEffect(() => {
    const titleEl = document.getElementsByTagName("title")[0];
    titleEl.innerHTML = `Mood Diary - New Diary`;
  }, []);

  return (
    <div>
      <DiaryEditor />
    </div>
  );
};

export default New;
