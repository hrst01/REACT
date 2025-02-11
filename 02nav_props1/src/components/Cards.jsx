export default function Cards(props) {

  const { title, desc, footer} = props

  return (
    <div className="flex flex-col gap-[2rem] items-center text-center border-1 rounded-lg h-[200px] shadow-md shadow-emerald-600 w-[300px]">
      <h1 className="text-4xl mt-[20px]">{title}</h1>
      <p className="text-xl">{desc}</p>
      <p className="text-3xl">{footer}</p>
    </div>
  );
}
