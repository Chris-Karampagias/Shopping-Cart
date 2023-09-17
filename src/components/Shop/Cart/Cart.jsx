import { Link, useOutletContext } from "react-router-dom";
import ItemsInCart from "./ItemsInCart";
import Summary from "./Summary";
import Icon from "@mdi/react";
import { mdiChevronRight } from "@mdi/js";
export default function Cart() {
  const [cart, setCart] = useOutletContext();

  const handleDelete = (title) => {
    const prodIndex = cart.findIndex((prod) => prod.title === title);
    const newCart = [...cart];
    newCart.splice(prodIndex, 1);
    setCart(newCart);
  };

  return (
    <aside className="bg-gradient-to-br flex flex-col from-orange-100 from-5% via-white via-50% to-orange-100 min-h-screen w-1/3 absolute top-[-112px] z-10 right-0 bg-white text-2xl border-2 border-black">
      {cart.length > 0 ? (
        <>
          <Link to="/shop/products">
            <Icon className="mt-5" path={mdiChevronRight} size={3} />
          </Link>
          <ItemsInCart cart={cart} handleDelete={handleDelete} />
          <Summary cart={cart} />
        </>
      ) : (
        <>
          <Link to="/shop/products">
            <Icon className="mt-5" path={mdiChevronRight} size={3} />
          </Link>
          <h1 className="text-4xl absolute top-1/2 left-10">
            There are no items in your cart
          </h1>
        </>
      )}
    </aside>
  );
}
