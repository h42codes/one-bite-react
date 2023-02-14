import { useNavigate } from "react-router-dom";
import { useState } from "react";

import MyHeader from "./MyHeader";
import MyButton from "./MyButton";
import MoodItem from "./MoodItem";

const env = process.env;
env.PUBLIC_URL = env.PUBLIC_URL || "";

const moodList = [
  {
    mood_id: 1,
    mood_img: process.env.PUBLIC_URL + `assets/emotion1.png`,
    mood_desc: "Very Good",
  },
  {
    mood_id: 2,
    mood_img: process.env.PUBLIC_URL + `assets/emotion2.png`,
    mood_desc: "Good",
  },
  {
    mood_id: 3,
    mood_img: process.env.PUBLIC_URL + `assets/emotion3.png`,
    mood_desc: "So So",
  },
  {
    mood_id: 4,
    mood_img: process.env.PUBLIC_URL + `assets/emotion4.png`,
    mood_desc: "Bad",
  },
  {
    mood_id: 5,
    mood_img: process.env.PUBLIC_URL + `assets/emotion5.png`,
    mood_desc: "Very Bad",
  },
];

const getStringDate = (date) => {
  return date.toISOString().slice(0, 10);
};

const DiaryEditor = () => {
  const [mood, setMood] = useState(3);
  const [date, setDate] = useState(getStringDate(new Date()));

  const handleClickMood = (mood) => {
    setMood(mood);
  };

  const navigate = useNavigate();
  return (
    <div className="DiaryEditor">
      <MyHeader
        headText={"New Entry"}
        leftChild={<MyButton text={"< Back"} onClick={() => navigate(-1)} />}
      />
      <div>
        <section>
          <h4>Today's Date</h4>
          <div className="input_box">
            <input
              className="input_date"
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
        </section>
        <section>
          <h4>Today's Mood</h4>
          <div className="input_box mood_list_wrapper">
            {moodList.map((item) => (
              <MoodItem
                key={item.mood_id}
                {...item}
                onClick={handleClickMood}
                isSelected={item.mood_id === mood}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default DiaryEditor;
