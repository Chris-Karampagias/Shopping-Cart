import { screen, render } from "@testing-library/react";
import { it, describe, expect } from "vitest";
import ItemsInCart from "./ItemsInCart";
import Summary from "./Summary";
import { motion, AnimatePresence } from "framer-motion";

const cart = [
  { title: "jacket", image: "something", price: 45, quantity: 1, id: 1 },
];

function Cart({ cart }) {
  const slideVariants = {
    slideLeft: {
      translateX: "0",
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
    slideRight: {
      translateX: "200%",
      opacity: 0,
    },
  };

  const handleDelete = (title) => {
    const prodIndex = cart.findIndex((prod) => prod.title === title);
    const newCart = [...cart];
    newCart.splice(prodIndex, 1);
  };

  return (
    <AnimatePresence>
      <motion.aside
        layout
        key={location.pathname}
        variants={slideVariants}
        initial={"slideRight"}
        animate={"slideLeft"}
        className="bg-gradient-to-br flex flex-col from-orange-100 from-5% via-white via-50% to-orange-100 min-h-screen w-1/3 absolute top-[-112px] z-10 right-0 bg-white text-2xl border-2 border-black"
      >
        {cart.length > 0 ? (
          <>
            <ItemsInCart cart={cart} handleDelete={handleDelete} />
            <Summary cart={cart} />
          </>
        ) : (
          <>
            <h1 className="text-4xl absolute top-1/2 left-10">
              There are no items in your cart
            </h1>
          </>
        )}
      </motion.aside>
    </AnimatePresence>
  );
}

describe("rendering logic tests", () => {
  it("displays a message if no items in cart and nothing else", () => {
    render(<Cart cart={[]} />);

    expect(screen.getByRole("heading")).toBeInTheDocument();
    expect(screen.queryByRole("section")).not.toBeInTheDocument();
  });

  it("displays the items in the cart and the total cost", () => {
    render(<Cart cart={cart} />);

    expect(
      screen.queryByRole("heading", { name: "There are no items in your cart" })
    ).not.toBeInTheDocument();
    expect(screen.getByTestId("items-in-cart")).toBeInTheDocument();
    expect(screen.getByTestId("summary")).toBeInTheDocument();
  });
});
