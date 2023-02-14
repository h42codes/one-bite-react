import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { DiaryStateContext } from "../App";
import DiaryEditor from "../components/DiaryEditor";

const Edit = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [origData, setOrigData] = useState();
  const diaryList = useContext(DiaryStateContext);

  useEffect(() => {
    if (diaryList.length >= 1) {
      const targetDiary = diaryList.find(
        (item) => parseInt(item.id) === parseInt(id)
      );

      if (targetDiary) {
        setOrigData(targetDiary);
      } else {
        alert("Diary does't exist");
        navigate("/", { replace: true });
      }
    }
  }, [id, diaryList]);

  return (
    <div>{origData && <DiaryEditor isEdit={true} origData={origData} />}</div>
  );
};

export default Edit;
