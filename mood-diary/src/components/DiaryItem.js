const DiaryItem = ({ id, mood, content, date }) => {
  const env = process.env;
  env.PUBLIC_URL = env.PUBLIC_URL || "";

  const strDate = new Date(parseInt(date)).toLocaleDateString();
  console.log(strDate);

  return (
    <div className="DiaryItem">
      <div
        className={["mood_img_wrapper", `mood_img_wrapper_${mood}`].join(" ")}
      >
        <img src={process.env.PUBLIC_URL + `assets/emotion${mood}.png`} />
      </div>
      <div className="info_wrapper">
        <div className="diary_date">{strDate}</div>
        <div className="diary_content_preview">{content.slice(0, 25)}</div>
      </div>
    </div>
  );
};

export default DiaryItem;
