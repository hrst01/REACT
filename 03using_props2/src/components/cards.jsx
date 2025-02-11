export default function Cards(props) {
  const title = props.title;
  const desc = props.desc;
  const footer = props.footer;
  return (
    <div
      className="flex flex-col gap-[2rem] items-center
          rounded-lg h-[12rem] 
         mt-[1rem] shadow-lg shadow-black w-[300px]"
    >
      <h1 className="text-2xl mt-[8px]">{title}</h1>
      <p className="text-xl">{desc}</p>
      <p className="text-3xl">{footer}</p>
    </div>
  );
}
