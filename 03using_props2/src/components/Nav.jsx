export default function Nav() {
  return (
    <div className="flex w-full h-[70px] 
    justify-between shadow-lg mt-2">
      <section className="text-4xl font-bold items-center mt-1.5 text-green-600 ml-[1rem]">Harshit Yadav</section>
      <section>
        <div className="flex  gap-7 items-center mt-[1rem] mr-[2rem] text-2xl">
          <button className="hover:resize-x ">Home</button>
          <button>About Us</button>
          <button>Contact Us</button>
          <button>Help</button>
        </div>
      </section>
    </div>
  );
}
