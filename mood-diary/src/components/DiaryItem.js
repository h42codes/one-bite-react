import { useNavigate } from "react-router-dom";
import MyButton from "./MyButton";

const DiaryItem = ({ id, mood, content, date }) => {
  const navigate = useNavigate();

  const env = process.env;
  env.PUBLIC_URL = env.PUBLIC_URL || "";

  const strDate = new Date(parseInt(date)).toLocaleDateString();

  const goToDetail = () => {
    navigate(`/diary/${id}`);
  };

  const goToEdit = () => {
    navigate(`/edit/${id}`);
  };

  return (
    <div className="DiaryItem">
      <div
        onClick={goToDetail}
        className={["mood_img_wrapper", `mood_img_wrapper_${mood}`].join(" ")}
      >
        <img src={process.env.PUBLIC_URL + `assets/emotion${mood}.png`} />
      </div>
      <div onClick={goToDetail} className="info_wrapper">
        <div className="diary_date">{strDate}</div>
        <div className="diary_content_preview">{content.slice(0, 25)}</div>
      </div>
      <div className="btn_wrapper">
        <MyButton text={"Edit"} onClick={goToEdit} />
      </div>
    </div>
  );
};

export default DiaryItem;
