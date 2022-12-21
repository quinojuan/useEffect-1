import React, { useState, useEffect } from "react";

console.log("Pre-Render");

const Lifecycle = () => {
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);

  console.log("Logic Render");

  useEffect(() => {
    console.log("useEffect []");
    return () => {
      console.log("cleanup useEffect []");
    };
  }, []);

  useEffect(() => {
    console.log("useEffect no dependency");
    return () => {
      console.log("cleanup useEffect no dependency");
    };
  });

  useEffect(() => {
    console.log("useEffect [counter1]");
    return () => {
      console.log("cleanup useEffect [counter1]");
    };
  }, [counter1]);

  useEffect(() => {
    console.log("useEffect [counter2]");
    return () => {
      console.log("cleanup useEffect [counter2]");
    };
  }, [counter2]);

  useEffect(() => {
    console.log("useEffect [counter1, counter2]");
    return () => {
      console.log("cleanup useEffect [counter1, counter2]");
    };
  }, [counter1, counter2]);

  return (
    <div>
      {console.log("return render")}
      <h1>Clicks c1: {counter1}</h1>
      <h1>Clicks c2: {counter2}</h1>
      <button onClick={() => setCounter1(counter1 + 1)}>Increment c1</button>
      &nbsp;&nbsp;
      <button onClick={() => setCounter2(counter2 + 1)}>Increment c2</button>
    </div>
  );
};

export default Lifecycle;
