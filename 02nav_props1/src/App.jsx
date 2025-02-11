import Herosection from "./components/Herosection";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="h-screen w-full mt-[5rem]">
        <Herosection />
      </div>
    </>
  );
}

export default App;
