import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import New from "./pages/New";
import Edit from "./pages/Edit";
import Diary from "./pages/Diary";

// COMPONENTS
import MyButton from "./components/MyButton";
import MyHeader from "./components/MyHeader";

function App() {
  // const env = process.env;
  // env.PUBLIC_URL = env.PUBLIC_URL || "";

  return (
    <BrowserRouter>
      <div className="App">
        <MyHeader
          headText={"App"}
          leftChild={
            <MyButton text="LEFT" onClick={() => alert("LEFT clicked")} />
          }
          rightChild={
            <MyButton text="RIGHT" onClick={() => alert("RIGHT clicked")} />
          }
        ></MyHeader>
        <h2>App.js</h2>
        <MyButton
          text="button"
          onClick={() => alert("button clicked")}
          type={"positive"}
        ></MyButton>
        <MyButton
          text="button"
          onClick={() => alert("button clicked")}
          type={"negative"}
        ></MyButton>
        <MyButton
          text="button"
          onClick={() => alert("button clicked")}
        ></MyButton>
        {/* <img src={process.env.PUBLIC_URL + "/assets/emotion1.png"} alt="" />
        <img src={process.env.PUBLIC_URL + "/assets/emotion2.png"} alt="" />
        <img src={process.env.PUBLIC_URL + "/assets/emotion3.png"} alt="" />
        <img src={process.env.PUBLIC_URL + "/assets/emotion4.png"} alt="" />
        <img src={process.env.PUBLIC_URL + "/assets/emotion5.png"} alt="" /> */}
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/new" element={<New />}></Route>
          <Route path="/edit" element={<Edit />}></Route>
          <Route path="/diary/:id" element={<Diary />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
