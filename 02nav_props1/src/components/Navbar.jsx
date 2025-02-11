const Navbar = () => {
  return (
    <div className="flex w-full h-[50px] justify-between shadow-md">
      <section className="text-4xl text-blue-700">Logo</section>
      <section>
        <div className="flex gap-4 items-center mt-[1rem] mr-[2rem]">
          <button>Home</button>
          <button>About Us</button>
          <button>Contact Us</button>
        </div>
      </section>
    </div>
  );
};

export default Navbar;
