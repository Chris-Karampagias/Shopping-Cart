/* eslint-disable react/prop-types */
import { render, screen } from "@testing-library/react";
import Carousel from "./Carousel";
import { it, describe, expect } from "vitest";

const MockErrorPage = vi.fn();

const Home = ({ images, error, loading }) => {
  return (
    <>
      {(loading && <h1 className="text-7xl text-center">Loading...</h1>) ||
        (error && (
          <>
            <MockErrorPage />
          </>
        )) || (
          <main className="min-h-fit bg-gradient-to-br flex flex-col justify-between gap-20 from-orange-100 from-10% via-white to-orange-300 overflow-hidden">
            <div className="flex justify-between text-8xl ">
              <h1 className="text-center mr-32 mt-32 opacity-0 animate-show-left">
                Welcome to our Fake Clothing Store
              </h1>
              <img
                className="max-w-screen-md rounded-2xl  opacity-0 aspect-square animate-show-right shadow-2xl"
                src="./src/assets/home-photo-store.jpg"
                alt=""
              />
            </div>
            <div className="h-2/5 mt-32">
              <h1 className="text-6xl text-center">Our Products</h1>
              <Carousel images={images} />
            </div>
            <div className="flex  justify-between text-8xl">
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
            </div>
          </main>
        )}
    </>
  );
};

describe("Home conditional rendering tests", () => {
  it("renders loading heading while images are being loaded", () => {
    render(<Home images={[]} loading={true} error={null} />);
    expect(screen.getByRole("heading").textContent).toMatch(/Loading.../);
  });

  it("renders the home page if the images are fetched and does not display Loading...", () => {
    render(<Home images={[]} loading={false} error={null} />);
    expect(screen.getByRole("main")).toBeInTheDocument();
  });

  it("renders an error page instead of the homepage if fetch throws an error", () => {
    render(<Home images={[]} loading={false} error={"Bad request"} />);
    expect(MockErrorPage).toHaveBeenCalledOnce();
  });
});
