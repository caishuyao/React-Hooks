import React, { useRef, useLayoutEffect } from "react";

const useMeasure = ([data]) => {
  const ref = useRef();

  useLayoutEffect(() => {
    return [ref, ref.currrent.getBoudingClientRect()];
  }, []);
  return <div ref={ref}>{data}</div>;
};

export default useMeasure;
