const DiaryList = ({ diaryList }) => {
  return (
    <div className="DiaryList">
      <h2>Diary List</h2>
      <h4>Total of {diaryList.length} diaries</h4>
      <div>
        {diaryList.map((diary) => (
          <div key={diary.id}>
            <div>Written by: {diary.author}</div>
            <div>{diary.content}</div>
            <div>Mood Score: {diary.score}</div>
            <div>Created on: {diary.created_date}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

DiaryList.defaultProps = {
  // set default values for props that might be undefined
  diaryList: [],
};

export default DiaryList;
