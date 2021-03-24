import Rect, { useState, useLayoutEffect } from "react";
//
export const useTest = (ref, deps) => {
  const [rect, setRect] = useState({});
  useLayoutEffect(() => {
    console.log(ref.current.getBoundingRect());
  }, deps);

  return rect;
};
