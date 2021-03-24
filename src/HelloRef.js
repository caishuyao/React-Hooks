import React, { useRef } from "react";

const HelloRef = () => {
  const renders = useRef(0);
  console.log("Hello Renders!", renders.current++);
  return <div>hello</div>;
};

export default HelloRef;
