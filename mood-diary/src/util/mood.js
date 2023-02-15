const env = process.env;
env.PUBLIC_URL = env.PUBLIC_URL || "";

export const moodList = [
  {
    mood_id: 1,
    mood_img: process.env.PUBLIC_URL + "/assets/emotion1.png",
    mood_desc: "Very Good",
  },
  {
    mood_id: 2,
    mood_img: process.env.PUBLIC_URL + "/assets/emotion2.png",
    mood_desc: "Good",
  },
  {
    mood_id: 3,
    mood_img: process.env.PUBLIC_URL + "/assets/emotion3.png",
    mood_desc: "So So",
  },
  {
    mood_id: 4,
    mood_img: process.env.PUBLIC_URL + "/assets/emotion4.png",
    mood_desc: "Bad",
  },
  {
    mood_id: 5,
    mood_img: process.env.PUBLIC_URL + "/assets/emotion5.png",
    mood_desc: "Very Bad",
  },
];
