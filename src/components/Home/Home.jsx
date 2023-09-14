import { useEffect } from "react";
import Carousel from "./Carousel";

export default function Home() {
  /* useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=5")
      .then((res) => res.json())
      .then((json) => console.log(json));
  }, []); */

  return (
    <div className="min-h-fit bg-gradient-to-br flex flex-col justify-between gap-20 from-white from-20% via-slate-300 to-slate-500 overflow-hidden">
      <div className="flex justify-between text-8xl ">
        <h1 className="text-center mr-32 mt-32 opacity-0 animate-show-left">
          Welcome to our Fake Clothing Store
        </h1>
        <img
          className="max-w-screen-md rounded-2xl  opacity-0 aspect-square animate-show-right"
          src="./src/assets/home-photo.jpg"
          alt=""
        />
      </div>
      <div className="h-2/5 mt-32">
        <h1 className="text-6xl text-center">Our Products</h1>
        <Carousel />
      </div>
      <div className="flex  justify-between text-8xl">
        <img
          className="w-1/3 rounded-2xl"
          src="./src/assets/home-photo-team.jpg"
          alt=""
        />
        <div className="mr-32 mt-32 flex justify-between flex-col">
          <h1 className="text-center ">Meet our team!</h1>
          <h2 className="text-5xl text-center mb-20">
            Here at Fake Clothing Store your comfort is our number one priority!
            We take pride in our products and are sure that they will meet your
            expectations!
          </h2>
        </div>
      </div>
    </div>
  );
}
