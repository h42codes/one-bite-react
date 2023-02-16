import React from "react";

const MoodItem = ({ mood_id, mood_img, mood_desc, onClick, isSelected }) => {
  return (
    <div
      className={[
        "MoodItem",
        isSelected ? `MoodItem_on_${mood_id}` : `MoodItem_off`,
      ].join(" ")}
      onClick={() => onClick(mood_id)}
    >
      <img src={mood_img} />
      <span>{mood_desc}</span>
    </div>
  );
};

export default React.memo(MoodItem);
