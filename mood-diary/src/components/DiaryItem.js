const DiaryItem = ({ id, mood, content, date }) => {
  const env = process.env;
  env.PUBLIC_URL = env.PUBLIC_URL || "";

  return (
    <div className="DiaryItem">
      <div
        className={["mood_img_wrapper", `mood_img_wrapper_${mood}`].join(" ")}
      >
        <img src={process.env.PUBLIC_URL + `assets/emotion${mood}.png`} />
      </div>
    </div>
  );
};

export default DiaryItem;
