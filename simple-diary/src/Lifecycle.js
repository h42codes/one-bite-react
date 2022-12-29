import React, { useEffect, useState } from "react";

const UnmountTest = () => {
  useEffect(() => {
    console.log("Mount!");

    // return function which will be executed at unmount
    return () => {
      console.log("Unmount!");
    };
  });
  return <div>Unmount Testing Component</div>;
};

const Lifecycle = () => {
  const [isVisible, setIsVisible] = useState(false);
  const toggle = () => setIsVisible(!isVisible);

  return (
    <div style={{ padding: 20 }}>
      <button onClick={toggle}>toggle</button>
      {isVisible && <UnmountTest />}
    </div>
  );
};

export default Lifecycle;
