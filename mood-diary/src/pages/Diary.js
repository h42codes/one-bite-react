import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { DiaryStateContext } from "../App";
import MyButton from "../components/MyButton";
import MyHeader from "../components/MyHeader";
import { getStringDate } from "../util/date";
import { moodList } from "../util/mood";

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

  if (!data) {
    return <div className="DiaryPage">Loading...</div>;
  } else {
    const curMoodData = moodList.find(
      (item) => parseInt(item.mood_id) === parseInt(data.mood)
    );

    return (
      <div className="DiaryPage">
        <MyHeader
          headText={`${getStringDate(new Date(data.date))}`}
          leftChild={<MyButton text={"< Back"} onClick={() => navigate(-1)} />}
          rightChild={
            <MyButton
              text={"Edit"}
              onClick={() => navigate(`/edit/${data.id}`)}
            />
          }
        />
        <article>
          <section>
            <h4>Today's Mood</h4>
            <div
              className={[
                "diary_img_wrapper",
                `diary_img_wrapper_${data.mood}`,
              ].join(" ")}
            >
              <img src={curMoodData.mood_img} />
              <div className="mood_desc">{curMoodData.mood_desc}</div>
            </div>
          </section>
        </article>
      </div>
    );
  }
};

export default Diary;
