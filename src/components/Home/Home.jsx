import { useEffect, useState } from "react";
import Carousel from "./Carousel";
import ErrorPage from "../ErrorPage";

export default function Home() {
  const [images, setImages] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
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
      {(loading && <h1 className="text-7xl text-center">Loading...</h1>) ||
        (error && (
          <>
            <ErrorPage error={error} />
          </>
        )) || (
          <main className="min-h-fit bg-gradient-to-br flex flex-col justify-between gap-20 from-orange-100 from-10% via-white to-orange-300 overflow-hidden">
            <section className="flex justify-between text-8xl ">
              <h1 className="text-center mr-32 mt-32 opacity-0 animate-show-left">
                Welcome to our Fake Clothing Store
              </h1>
              <img
                className="max-w-screen-md rounded-2xl  opacity-0 aspect-square animate-show-right shadow-2xl"
                src="./src/assets/home-photo-store.jpg"
                alt=""
              />
            </section>
            <section className="h-2/5 mt-32">
              <h1 className="text-6xl text-center">Our Products</h1>
              <Carousel images={images} />
            </section>
            <section className="flex  justify-between text-8xl">
              <img
                className="w-1/3 rounded-2xl shadow-2xl"
                src="./src/assets/home-photo-team.jpg"
                alt=""
              />
              <div className="mr-32 mt-32 flex justify-between flex-col">
                <h1 className="text-center ">Meet our team!</h1>
                <h2 className="text-5xl text-center mb-52">
                  Here at Fake Clothing Store your comfort is our number one
                  priority! We take pride in our products and are sure that they
                  will meet your expectations!
                </h2>
              </div>
            </section>
          </main>
        )}
    </>
  );
}
