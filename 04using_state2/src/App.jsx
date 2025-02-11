import { useState } from "react";

function App() {
  const [color, setColor] = useState("green");
  console.log(color);
  const [count, setCount] = useState(0);
  // console.log(count);

  return (
    <div>
      <div className="w-screen h-screen " style={{ backgroundColor: color }}>


      <div className=" mx-auto text-center">
        <button
          className="m-3 p-4 text-2xl rounded-lg bg-black text-white mt-[10rem]"
          onClick={() => setCount((count) => count + 1)}
        >
          Count: {count}
        </button>
      </div>
      
        <div className="top-[30rem] mx-auto relative ml-[40%] gap-4 flex">
          <button
            className="m-2 p-2 bg-blue-600 rounded-2xl text-2xl"
            onClick={() => setColor("blue")}
          >
            Blue
          </button>

          <button
            className="m-2 p-2 bg-black rounded-2xl text-2xl text-white"
            onClick={() => setColor("black")}
          >
            Black
          </button>

          <button
            className="m-2 p-2 bg-yellow-500 rounded-2xl text-2xl"
            onClick={() => setColor("yellow")}
          >
            Yellow
          </button>
        </div>
      </div>
      
    </div>
  );
}

export default App;
