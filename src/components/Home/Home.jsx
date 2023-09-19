import { useEffect, useState } from "react";
import Carousel from "./Carousel";
import ErrorPage from "../ErrorPage";

export default function Home() {
  const [images, setImages] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  window.scrollTo({ top: 0, left: 0 });
  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=5")
      .then((res) => {
        if (!res.ok) {
          throw new Error(`This is an HTTP error: The status is ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        const newImages = [];
        data.forEach((el) => {
          newImages.push(el.image);
        });
        setImages(newImages);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      {(loading && (
        <h1 className="text-2xl md:text-7xl text-center mt-20 mb-[2000px]">
          Loading...
        </h1>
      )) ||
        (error && (
          <>
            <ErrorPage error={error} />
          </>
        )) || (
          <main className="min-h-fit bg-gradient-to-br flex flex-col justify-between from-orange-100 from-10% via-white to-orange-300 overflow-hidden">
            <section className="flex flex-col min-h-[600px] lg:flex-row ">
              <h1 className="text-center self-center w-[60%] order-2 flex-1 text-5xl mt-5 lg:text-6xl 2xl:text-7xl  lg:mr-32 lg:mt-32 opacity-0 animate-show-left">
                Welcome to our Demo Clothing Store
              </h1>
              <img
                className="w-full max-h-[650px] lg:max-h-[1000px] lg:max-w-[50%] lg:order-2 rounded-t-md lg:rounded-s-xl opacity-0 aspect-square animate-show-right shadow-2xl"
                src="./src/assets/home-photo-store.jpg"
                alt=""
              />
            </section>
            <section className="h-2/5 mt-32">
              <h1 className="text-5xl mt-5 lg:text-6xl 2xl:text-7xl text-center">
                Our Products
              </h1>
              <Carousel images={images} />
            </section>
            <section className="flex flex-col lg:flex-row gap-5 lg:mt-20 items-center justify-between">
              <img
                className="w-full max-h-[700px] 2xl:max-h-[1000px] order-2 rounded-b-md lg:rounded-e-xl 2xl:w-[40%]  shadow-2xl"
                src="./src/assets/home-photo-team.jpg"
                alt=""
              />
              <div className="flex justify-between gap-5 2xl:gap-10 2xl:w-[40%] md:mt-10 lg:order-2 flex-col">
                <h1 className="text-center text-5xl lg:text-6xl 2xl:text-7xl w-3/4 self-center ">
                  Meet our team!
                </h1>
                <h2 className="text-start text-3xl lg:text-4xl 2xl:text-5xl w-[90%] self-start md:self-center">
                  Here at Demo Clothing Store your comfort is our number one
                  priority! We take pride in our products and are sure to meet
                  your expectations!
                </h2>
              </div>
            </section>
          </main>
        )}
    </>
  );
}
