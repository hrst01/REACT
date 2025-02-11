import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";

export default function Github() {
  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   fetch("https://api.github.com/users/avidev-creator")
  //     .then((response) => response.json())
  //     .then((data) => setData(data));
  // }, []);
  const data = useLoaderData();

  return (
    <>
      <section className="bg-white">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-gray-700">
              Welcome {data.name}
            </h1>
            <p className="max-w-2xl mb-6 font-light text-gray-700 lg:mb-8 md:text-lg lg:text-xl ">
              {data.bio}
            </p>
            <button className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
              {data.url}
            </button>
          </div>
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img
              src={data.avatar_url}
              alt="mockup"
              className="rounded-full shadow-lg shadow-blue-500"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/avidev-creator");

  console.log(response);

  return response.json();
};
