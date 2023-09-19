import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Icon from "@mdi/react";
import { mdiChevronLeft, mdiChevronRight } from "@mdi/js";
import PropTypes from "prop-types";

function Carousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState("left");

  const handleNext = () => {
    if (currentIndex + 1 === images.length) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
    setDirection("right");
  };

  const handlePrevious = () => {
    if (currentIndex - 1 < 0) {
      setCurrentIndex(images.length - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
    setDirection("left");
  };

  const handleDotClick = (index) => {
    if (index < currentIndex) {
      setDirection("left");
    } else {
      setDirection("right");
    }
    setCurrentIndex(index);
  };

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
    <div className="mt-24 select-none ">
      <div className="flex justify-evenly items-center relative">
        <div className="h-14 w-[70px] md:w-40 md:h-40 2xl:h-72 2xl:w-72 absolute z-[7]  left-0 bottom-10 lg:bottom-1/3 flex place-content-center">
          <Icon
            path={mdiChevronLeft}
            size={5}
            className="transition-all text-orange-500 hover:scale-105 cursor-pointer"
            onClick={() => {
              handlePrevious();
            }}
          />
        </div>
        <div className="flex w-full lg:w-3/5 h-[400px] md:h-[600px] 2xl:h-[800px] 2xl:w-1/2 border-black  border-[1px] bg-white rounded-2xl overflow-hidden relative shadow-2xl">
          <AnimatePresence>
            <motion.img
              layout
              key={currentIndex}
              variants={slideVariants}
              initial={direction === "right" ? "hiddenRight" : "hiddenLeft"}
              animate="visible"
              exit="exit"
              className="h-2/4 w-1/2 md:h-[400px] md:w-[300px] lg:w-[400px] xl:w-[500px] 2xl:h-[500px]   aspect-square absolute top-[25%] left-[25%] md:top-[100px] md:left-[30%] lg:top-[20%] lg:left-[130px] xl:left-[200px] 2xl:left-[250px] 2xl:top-[180px]  translate-10   "
              src={images[currentIndex]}
              alt="An image of a clothes"
            />
          </AnimatePresence>
        </div>
        <div className="h-14 w-[70px] md:w-40 md:h-40 2xl:h-72 2xl:w-72 right-0 bottom-10 lg:bottom-1/3 absolute z-[7] flex place-content-center">
          <Icon
            path={mdiChevronRight}
            size={5}
            className="transition-all text-orange-500 hover:scale-105 cursor-pointer"
            onClick={() => {
              handleNext();
            }}
          />
        </div>
      </div>
      <div className="flex gap-5 md:gap-20 w-fit mt-10 mb-20 ml-auto mr-auto justify-self-center">
        {images.map((image, index) => (
          <div
            key={index}
            className={
              currentIndex === index
                ? "h-7 w-7 2xl:h-16 2xl:w-16 rounded-full border-solid bg-orange-500 border-orange-500  border-2 cursor-pointer "
                : "h-7 w-7 2xl:h-16 2xl:w-16 rounded-full border-solid bg-white border-2 cursor-pointer "
            }
            onClick={() => {
              handleDotClick(index);
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}

Carousel.propTypes = {
  images: PropTypes.array.isRequired,
};

export default Carousel;
