import React, { useRef, useEffect } from "react";

const Hello = () => {
  const ref = useRef();

  useEffect(() => {
    console.log("call useeffect ");
    return () => {
      console.log("unmount:");
    };
  }, []);

  useLayoutEffect(()=>{
    console.log(ref.current.getBoundingRect())
  },[data])
  return (
    <div style={display:flex}>
      <div ref={ref}> {!data?"loading...": data}</div>
    </div>
  );
};

export default Hello;
