/* eslint-disable react/prop-types */
import { render, screen } from "@testing-library/react";
import { it, describe, expect, vi } from "vitest";
import userEvent from "@testing-library/user-event";
import Icon from "@mdi/react";
import { mdiChevronLeft, mdiChevronRight } from "@mdi/js";
import { motion, AnimatePresence } from "framer-motion";

const MockCarousel = ({
  images,
  handleNext,
  handlePrevious,
  handleDotClick,
}) => {
  const currentIndex = 0;
  const direction = "right";
  const slideVariants = {
    hiddenRight: {
      translateX: "100%",
      opacity: 0,
    },
    hiddenLeft: {
      translateX: "-100%",
      opacity: 0,
    },
    visible: {
      translateX: "0",
      opacity: 1,
      transition: {
        duration: 1.3,
      },
    },
    exit: {
      opacity: 0,
    },
  };

  return (
    <div className="mt-24 select-none">
      <div className="flex justify-evenly items-center">
        <div className="w-40 h-40 flex place-content-center">
          <Icon
            data-testid="left-arrow"
            path={mdiChevronLeft}
            size={5}
            className="transition-all text-orange-500 hover:scale-105 cursor-pointer"
            onClick={handlePrevious}
          />
        </div>
        <div className="flex w-3/5 h-[700px] p-10 border-black  border-[1px] bg-white rounded-2xl overflow-hidden relative shadow-2xl">
          <AnimatePresence>
            <motion.img
              layout
              key={currentIndex}
              variants={slideVariants}
              initial={direction === "right" ? "hiddenRight" : "hiddenLeft"}
              animate="visible"
              exit="exit"
              className="w-2/5 aspect-square absolute top-40 left-[30%] ="
              src={images[currentIndex]}
              alt="An image of a clothe"
            />
          </AnimatePresence>
        </div>
        <div className="w-40 h-40 flex place-content-center">
          <Icon
            data-testid="right-arrow"
            path={mdiChevronRight}
            size={5}
            className="transition-all text-orange-500 hover:scale-105 cursor-pointer"
            onClick={handleNext}
          />
        </div>
      </div>
      <div className="flex gap-20 w-fit mt-10 mb-20 ml-auto mr-auto justify-self-center">
        {images.map((image, index) => (
          <button
            key={index}
            className={
              currentIndex === index
                ? "h-7 w-7 rounded-full border-solid bg-orange-500 border-orange-500  border-2 cursor-pointer "
                : "h-7 w-7 rounded-full border-solid bg-white border-2 cursor-pointer "
            }
            onClick={handleDotClick}
          ></button>
        ))}
      </div>
    </div>
  );
};

describe("Functionality tests for arrows and dots", () => {
  it("calls handleNext and only handleNext when user clicks right arrow", async () => {
    const user = userEvent.setup();
    const handleNext = vi.fn();
    const handlePrevious = vi.fn();
    const handleDotClick = vi.fn();

    render(
      <MockCarousel
        images={[""]}
        handleNext={handleNext}
        handlePrevious={handlePrevious}
        handleDotClick={handleDotClick}
      />
    );
    const rightArrow = screen.getByTestId("right-arrow");
    await user.click(rightArrow);

    expect(handleNext).toHaveBeenCalledOnce();
    expect(handlePrevious).not.toHaveBeenCalled();
    expect(handleDotClick).not.toHaveBeenCalled();
  });

  it("calls handlePrevious and only handlePrevious when user clicks left arrow", async () => {
    const user = userEvent.setup();
    const handleNext = vi.fn();
    const handlePrevious = vi.fn();
    const handleDotClick = vi.fn();

    render(
      <MockCarousel
        images={[""]}
        handleNext={handleNext}
        handlePrevious={handlePrevious}
        handleDotClick={handleDotClick}
      />
    );
    const leftArrow = screen.getByTestId("left-arrow");
    await user.click(leftArrow);

    screen.debug();
    expect(handlePrevious).toHaveBeenCalledOnce();
    expect(handleNext).not.toHaveBeenCalled();
    expect(handleDotClick).not.toHaveBeenCalled();
  });

  it("calls handleDotClick and only handleDotClick when user clicks one of the dots", async () => {
    const user = userEvent.setup();
    const handleNext = vi.fn();
    const handlePrevious = vi.fn();
    const handleDotClick = vi.fn();

    render(
      <MockCarousel
        images={[""]}
        handleNext={handleNext}
        handlePrevious={handlePrevious}
        handleDotClick={handleDotClick}
      />
    );
    const dot = screen.getByRole("button");
    await user.click(dot);

    expect(handlePrevious).not.toHaveBeenCalled;
    expect(handleNext).not.toHaveBeenCalled();
    expect(handleDotClick).toHaveBeenCalledOnce();
  });
});
