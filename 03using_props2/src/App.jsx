import Cards from "./components/cards";
import Nav from "./components/Nav";

function App() {
  return (
    <div>
      <Nav />
      <div className="flex flex-col gap-4 sm:flex sm:gap-20 sm:items-center sm:flex-row">
        <Cards title="First card" desc="hello world" footer="this is footer" />
        <Cards title="Second card" desc="hello world" footer="this is footer" />
        <Cards title="Third card" desc="hello world" footer="this is footer" />
      </div>
      {/* <h1>helo this is from react</h1> */}
    </div>
  );
}

export default App;
