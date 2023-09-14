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
    <div className="mt-24 select-none">
      <div className="flex justify-evenly items-center">
        <div className="w-40 h-40 flex place-content-center">
          <Icon
            path={mdiChevronLeft}
            size={5}
            className="transition-all text-orange-500 hover:scale-105 cursor-pointer"
            onClick={() => {
              handlePrevious();
            }}
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
            path={mdiChevronRight}
            size={5}
            className="transition-all text-orange-500 hover:scale-105 cursor-pointer"
            onClick={() => {
              handleNext();
            }}
          />
        </div>
      </div>
      <div className="flex gap-20 w-fit mt-10 mb-20 ml-auto mr-auto justify-self-center">
        {images.map((image, index) => (
          <div
            key={index}
            className={
              currentIndex === index
                ? "h-7 w-7 rounded-full border-solid bg-orange-500 border-orange-500  border-2 cursor-pointer "
                : "h-7 w-7 rounded-full border-solid bg-white border-2 cursor-pointer "
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
