const MoodItem = ({ mood_id, mood_img, mood_desc }) => {
  return (
    <div className="MoodItem">
      <img src={mood_img} />
      <span>{mood_desc}</span>
    </div>
  );
};

export default MoodItem;
