import { Link, Outlet } from "react-router-dom";
import Icon from "@mdi/react";
import { mdiCart, mdiCircleSmall } from "@mdi/js";
import { useState } from "react";

export default function Navbar() {
  const [selected, setSelected] = useState("home");
  const [cart, setCart] = useState([]);
  return (
    <>
      <nav className="w-full h-32 md:h-28 bg-orange-500 text-white decoration-2 flex justify-between gap-14 items-center text-2xl md:text-5xl 2xl:text-6xl pl-4 pr-4 shadow-2xl sticky top-0 z-10">
        <h1 className="w-1/3 md:text-4xl 2xl:text-6xl">Demo Clothing Store</h1>
        <div className="flex flex-col items-start md:flex-row md:items-center pt-1 pb-1 md:pt-0 md:pb-0 relative md:gap-14">
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
              <div className="w-5 md:mr-5">
                <Icon path={mdiCart} size={2} />
              </div>
            )}{" "}
            {cart.length > 0 && selected === "shop" && (
              <div className="mr-5">
                <Icon
                  className="absolute top-[50px] right-0 translate-x-1 md:top-0 md:translate-y-[-50%]"
                  path={mdiCircleSmall}
                  size={2}
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
