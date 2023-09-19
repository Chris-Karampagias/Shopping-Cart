import { useState } from "react";
import Icon from "@mdi/react";
import { mdiChevronLeft } from "@mdi/js";
import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";

function FullItem({ title, image, price, description, id, addToCart, goBack }) {
  const [quantity, setQuantity] = useState(1);
  const location = useLocation();
  const cartIsOpen = location.pathname.includes("cart");
  const body = document.querySelector("body");
  let className;

  if (cartIsOpen) {
    className = "w-full blur-md pointer-events-none min-h-screen flex relative";
    body.classList.add("overflow-hidden");
    window.scrollTo({ top: "-112px", left: 0 });
  } else {
    className = "w-full min-h-screen flex flex-col gap-5 md:flex-row relative";
    body.classList.remove("overflow-hidden");
  }
  const reduceQuantity = () => {
    if (quantity === 1) {
      return;
    } else {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };
  return (
    <section className={className}>
      <button className="h-[50px] absolute md:sticky left-0 md:top-24 hover:scale-105 duration-200 ">
        <Icon
          data-testid="go-back"
          path={mdiChevronLeft}
          size={5}
          onClick={() => {
            goBack();
          }}
        />
      </button>
      <div className="w-full h-fit flex items-center justify-center ">
        <div className="flex w-[90%] lg:max-w-[1200px] rounded-2xl shadow-2xl flex-col gap-10 justify-between bg-white p-5 lg:p-10 mt-32 lg:mt-10 mb-10">
          <div className="flex flex-col gap-5 md:gap-3 md:flex-row justify-between">
            <img
              className="w-[90%] md:w-[45%] self-center md:self-start rounded-2xl"
              src={image}
              alt="A photo of the product"
            />
            <div className=" md:border-l-[1px] lg:w-[40%] border-gray-300 flex flex-col gap-5 justify-between bg-white p-2">
              <h1 className="font-bold text-2xl lg:text-4xl text-center md:text-start">
                {title}
              </h1>
              <h2 className="text-orange-500 text-3xl xl:text-4xl 2xl:text-5xl xl:text-start text-center font-bold">
                {price}€
              </h2>
              <div className="flex w-full md:w-2/3 self-center justify-between items-center bg-gray-200 rounded-2xl p-4">
                <button
                  className="text-7xl pb-2 font-bold text-orange-500 hover:scale-125 duration-200"
                  onClick={() => {
                    reduceQuantity();
                  }}
                >
                  -
                </button>
                <p className="bg-gray-100 p-3 w-[30%] text-2xl text-center rounded-xl font-bold">
                  {quantity}
                </p>
                <button
                  className="text-5xl font-bold text-orange-500 hover:scale-125 duration-200"
                  onClick={() => {
                    increaseQuantity();
                  }}
                >
                  +
                </button>
              </div>
              <button
                onClick={() => {
                  addToCart(title, image, price, quantity, id);
                }}
                className="bg-orange-500 w-full text-3xl md:text-4xl text-white md:w-[60%] self-center rounded-2xl p-2 shadow-xl hover:scale-105 duration-200"
              >
                Add to cart
              </button>
            </div>
          </div>
          <div className="border-t-[1px] border-gray-300">
            <p className="text-xl md:text-3xl mt-5 break-words">
              {description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

FullItem.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  addToCart: PropTypes.func.isRequired,
  goBack: PropTypes.func.isRequired,
};

export default FullItem;
