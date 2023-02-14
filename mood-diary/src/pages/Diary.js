import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { DiaryStateContext } from "../App";

const Diary = () => {
  const { id } = useParams();
  const diaryList = useContext(DiaryStateContext);
  const navigate = useNavigate();
  const [data, setData] = useState();

  useEffect(() => {
    if (diaryList.length >= 1) {
      const targetDiary = diaryList.find(
        (item) => parseInt(item.id) === parseInt(id)
      );

      if (targetDiary) {
        setData(targetDiary);
      } else {
        alert("Diary does't exist");
        navigate("/", { replace: true });
      }
    }
  }, [id, diaryList]);

  return (
    <div>
      <h1>Diary</h1>
      <p>This is Diary section</p>
    </div>
  );
};

export default Diary;
