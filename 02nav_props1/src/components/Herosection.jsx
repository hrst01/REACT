import Cards from "./Cards";

const Herosection = () => {
  return (
    <div className="w-full flex flex-col">
      <h1 className="mx-auto text-center text-4xl">Hero Section</h1>
      <div className="mt-[5rem] mx-auto items-center flex gap-4">
        <Cards title="First Title" desc="description" footer="footer" />
        <Cards title="Second Title" desc="description" footer="footer" />
        <Cards title="Third Title" desc="description" footer="footer" />
      </div>
    </div>
  );
};

export default Herosection;
