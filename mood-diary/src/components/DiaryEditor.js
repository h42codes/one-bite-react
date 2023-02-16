import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useRef, useState } from "react";

import MyHeader from "./MyHeader";
import MyButton from "./MyButton";
import MoodItem from "./MoodItem";
import { DiaryDispatchContext } from "../App";

import { getStringDate } from "../util/date";
import { moodList } from "../util/mood";

// const env = process.env;
// env.PUBLIC_URL = env.PUBLIC_URL || "";

const DiaryEditor = ({ isEdit, origData }) => {
  const contentRef = useRef();
  const [content, setContent] = useState("");
  const [mood, setMood] = useState(3);
  const [date, setDate] = useState(getStringDate(new Date()));

  const { onCreate, onEdit, onRemove } = useContext(DiaryDispatchContext);

  const navigate = useNavigate();

  const handleClickMood = (mood) => {
    setMood(mood);
  };

  const handleSubmit = () => {
    if (content.length < 1) {
      contentRef.current.focus();
      return;
    }

    if (window.confirm(isEdit ? "Save your edit?" : "Save new diary?")) {
      if (!isEdit) {
        onCreate(date, content, mood);
      } else {
        onEdit(origData.id, date, content, mood);
      }
    }

    navigate("/", { replace: true });
  };

  const handleRemove = () => {
    if (window.confirm("Delete this diary?")) {
      onRemove(origData.id);
      navigate("/", { replace: true });
    }
  };

  useEffect(() => {
    if (isEdit) {
      setDate(getStringDate(new Date(parseInt(origData.date))));
      setMood(origData.mood);
      setContent(origData.content);
    }
  }, [isEdit, origData]);

  return (
    <div className="DiaryEditor">
      <MyHeader
        headText={isEdit ? "Edit Entry" : "New Entry"}
        leftChild={<MyButton text={"< Back"} onClick={() => navigate(-1)} />}
        rightChild={
          isEdit && (
            <MyButton
              text={"Delete"}
              onClick={handleRemove}
              type={"negative"}
            />
          )
        }
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
        <section>
          <h4>Today's Diary</h4>
          <div className="input_box text_wrapper">
            <textarea
              ref={contentRef}
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="How was today?"
            ></textarea>
          </div>
        </section>
        <section>
          <div className="control_box">
            <MyButton text={"Cancel"} onClick={() => navigate(-1)} />
            <MyButton text={"Save"} type={"positive"} onClick={handleSubmit} />
          </div>
        </section>
      </div>
    </div>
  );
};

export default DiaryEditor;
