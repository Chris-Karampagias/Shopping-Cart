import Icon from "@mdi/react";
import { mdiDelete } from "@mdi/js";
import PropTypes from "prop-types";

function ItemsInCart({ cart, handleDelete }) {
  return (
    <div className="flex flex-col gap-10 p-2 mt-10">
      {cart.map((prod, index) => {
        return (
          <div
            className={
              index < cart.length - 1
                ? "flex border-b-[1px] items-center justify-between gap-2"
                : "flex items-center justify-between gap-2"
            }
            key={prod.id}
          >
            <img
              className="w-[13%] mb-2 rounded-xl"
              src={prod.image}
              alt="Product image"
            />
            <h1 className="text-3xl w-[45%] whitespace-nowrap overflow-hidden text-ellipsis">
              {prod.title}
            </h1>
            <h2 className="text-3xl text-gray-500">x{prod.quantity}</h2>
            <h2 className="font-bold w-[15%] text-3xl mr-5">{prod.price}€</h2>
            <button
              className="text-red-500"
              onClick={() => handleDelete(prod.title)}
            >
              <Icon path={mdiDelete} size={1.5} />
            </button>
          </div>
        );
      })}
    </div>
  );
}

ItemsInCart.propTypes = {
  cart: PropTypes.array.isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export default ItemsInCart;
