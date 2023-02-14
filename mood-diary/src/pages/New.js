import { useNavigate } from "react-router-dom";

import MyHeader from "../components/MyHeader";
import MyButton from "../components/MyButton";

const New = () => {
  const navigate = useNavigate();
  return (
    <div>
      <MyHeader
        headText={"New Entry"}
        leftChild={<MyButton text={"< Back"} onClick={() => navigate(-1)} />}
      />
    </div>
  );
};

export default New;
