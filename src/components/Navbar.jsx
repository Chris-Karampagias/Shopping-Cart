import { Link, Outlet } from "react-router-dom";
import Icon from "@mdi/react";
import { mdiCart, mdiCircleSmall } from "@mdi/js";
import { useState } from "react";

export default function Navbar() {
  const [selected, setSelected] = useState("home");
  const [cart, setCart] = useState([]);
  return (
    <>
      <nav className="w-full h-28 bg-orange-500 text-white decoration-2 flex justify-between items-center text-5xl pl-4 pr-4 shadow-2xl sticky top-0 z-10">
        <h1>Fake Clothing Store</h1>
        <div className="flex gap-20">
          <Link
            className={
              selected === "shop"
                ? "cursor-pointer hover:underline decoration-slate-200 transition-all"
                : "cursor-pointer pointer-events-none decoration-slate-200 transition-all"
            }
            onClick={() => {
              setSelected("home");
            }}
            to="home"
          >
            Home
          </Link>
          <Link
            className={
              selected === "home"
                ? "cursor-pointer hover:underline decoration-slate-200 transition-all"
                : "cursor-pointer pointer-events-none decoration-slate-200 transition-all"
            }
            to="shop/products"
            onClick={() => {
              setSelected("shop");
            }}
          >
            Shop
          </Link>
          <Link className="cursor-pointer " to="shop/products/cart">
            {cart.length === 0 && selected === "shop" && (
              <div>
                <Icon path={mdiCart} size={2.5} />
              </div>
            )}{" "}
            {cart.length > 0 && selected === "shop" && (
              <div className="flex mr-5">
                <Icon
                  className="absolute top-0 right-0 translate-y-[-15%]"
                  path={mdiCircleSmall}
                  size={3}
                />
                <Icon
                  className="hover:scale-105 transition-all"
                  path={mdiCart}
                  size={2.5}
                />
              </div>
            )}
            {selected === "home" && <div>{null}</div>}
          </Link>
        </div>
      </nav>
      <Outlet context={[cart, setCart]} />
    </>
  );
}
