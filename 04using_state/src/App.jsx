import { useState } from "react"; // react hook

function App() {
  const [color, setColor] = useState("black");

  const [count, setCount] = useState(0);

  console.log(count);

  return (
    <>
      <div className="w-screen h-screen" style={{ backgroundColor: color }}>
        <div className="top-[35rem] mx-auto relative ml-[40%] gap-4 flex">
          <button
            className="rounded-2xl bg-blue-700 text-white m-2 p-4"
            onClick={() => setColor("blue")}
          >
            Blue
          </button>
          <button
            className="rounded-2xl bg-green-700 text-white m-2 p-4"
            onClick={() => setColor("green")}
          >
            Green
          </button>
          <button
            className="rounded-2xl bg-red-700 text-white m-2 p-4"
            onClick={() => setColor("red")}
          >
            Red
          </button>
        </div>
        <div className="mt-[15rem] mx-auto text-center">
          <button
            className="m-2 p-4 text-2xl rounded-lg bg-white"
            onClick={() => setCount(count + 1)}
          >
            Count : {count + 1}
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
