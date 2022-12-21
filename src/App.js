// import FetchCard from "./FetchCard";
import Lifecycle from "./Lifecycle";
import { useState } from "react";
// import ResizeApp from "./ResizeApp";

function App() {

  const [show, setShow] = useState(false)
  return (
    <div>
      <button onClick={() => setShow(!show)}>Show/Hide</button>
      {show && <Lifecycle />}
      
      {/* <FetchCard /> */}
      {/* {show && <ResizeApp />} */}
    </div>
  );
}

export default App;
