import Item from "./Item";
import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";

function ItemGrid({ products, handleItemClick }) {
  const location = useLocation();
  const cartIsOpen = location.pathname.includes("cart");
  const body = document.querySelector("body");
  let className;

  if (cartIsOpen) {
    className =
      "min-h-screen blur-md pointer-events-none w-100% flex justify-center 2xl:justify-start flex-wrap gap-5 gap-y-10 p-2 pt-5 pb-40";
    body.classList.add("overflow-hidden");
    window.scrollTo({ top: "-112px", left: 0 });
  } else {
    className =
      "min-h-screen w-100% flex justify-center 2xl:justify-start flex-wrap gap-5 gap-y-10 p-2 pt-5 pb-40";
    body.classList.remove("overflow-hidden");
  }

  return (
    <section className={className}>
      {products.map((product) => {
        return (
          <Item
            key={product.id}
            title={product.title}
            price={product.price}
            image={product.image}
            onClick={() => handleItemClick(product)}
          />
        );
      })}
    </section>
  );
}

ItemGrid.propTypes = {
  products: PropTypes.array.isRequired,
  handleItemClick: PropTypes.func.isRequired,
};

export default ItemGrid;
