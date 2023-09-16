import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { it, describe, expect } from "vitest";
import Icon from "@mdi/react";
import { mdiChevronLeft } from "@mdi/js";

function FullItem({
  title,
  image,
  price,
  description,
  goBack,
  reduceQuantity,
  increaseQuantity,
  addToCart,
}) {
  return (
    <section className="w-full min-h-screen flex relative">
      <button className="h-[50px] sticky left-0 top-24 hover:scale-105 duration-200 ">
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
        <div className="flex max-w-[1200px] rounded-2xl shadow-2xl flex-col gap-10 justify-between bg-white p-10 mt-10 mb-10">
          <div className="flex justify-between">
            <img
              className="w-[45%] rounded-2xl"
              src={image}
              alt="A photo of the product"
            />
            <div className="text-4xl border-l-[1px] w-[40%] border-gray-300 flex flex-col justify-between bg-white p-2">
              <h1 className="font-bold">{title}</h1>
              <h2 className="text-orange-500 font-bold">{price}€</h2>
              <div className="flex w-2/3 self-center justify-between items-center bg-gray-200 rounded-2xl p-4">
                <button
                  className="text-7xl pb-2 font-bold text-orange-500 hover:scale-125 duration-200"
                  onClick={() => {
                    reduceQuantity();
                  }}
                >
                  -
                </button>
                <p className="bg-gray-100 p-3 w-[30%] text-center rounded-xl font-bold">
                  1
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
                  addToCart();
                }}
                className="bg-orange-500 text-white w-[60%] self-center rounded-2xl p-2 text-4xl shadow-xl hover:scale-105 duration-200"
              >
                Add to cart
              </button>
            </div>
          </div>
          <div className="border-t-[1px] border-gray-300">
            <p className="text-3xl mt-5">{description}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

const mockGoBack = vi.fn();
const mockReduceQuantity = vi.fn();
const mockIncreaseQuantity = vi.fn();
const mockAddToCart = vi.fn();
const props = {
  title: "Jacket",
  image: "woo",
  price: 40,
  description: "Another woo",
  goBack: () => {
    mockGoBack();
  },
  reduceQuantity: () => {
    mockReduceQuantity();
  },
  increaseQuantity: () => {
    mockIncreaseQuantity();
  },
  addToCart: () => {
    mockAddToCart();
  },
};

describe("functionality tests for full item", () => {
  it("returns to shop if user clicks the arrow", async () => {
    const user = userEvent.setup();

    render(<FullItem {...props} />);
    const arrow = screen.getByTestId("go-back");
    await user.click(arrow);

    expect(mockGoBack).toHaveBeenCalledOnce();
  });

  it("increases quantity if user clicks on the + button", async () => {
    const user = userEvent.setup();

    render(<FullItem {...props} />);
    const plusButton = screen.getByRole("button", { name: "+" });
    await user.click(plusButton);

    expect(mockIncreaseQuantity).toHaveBeenCalledOnce();
  });

  it("decreases quantity if user clicks on the - button", async () => {
    const user = userEvent.setup();

    render(<FullItem {...props} />);
    const minusButton = screen.getByRole("button", { name: "-" });
    await user.click(minusButton);

    expect(mockReduceQuantity).toHaveBeenCalledOnce();
  });

  it("adds product to cart if user clicks on the add to cart button", async () => {
    const user = userEvent.setup();

    render(<FullItem {...props} />);
    const addToCart = screen.getByRole("button", { name: "Add to cart" });
    await user.click(addToCart);

    expect(mockAddToCart).toHaveBeenCalledOnce();
  });
});
