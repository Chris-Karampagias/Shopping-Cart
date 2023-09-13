import { Link, Outlet } from "react-router-dom";
import Icon from "@mdi/react";
import { mdiCart } from "@mdi/js";
import { useState } from "react";

export default function Navbar() {
  const [selected, setSelected] = useState("home");

  return (
    <>
      <div className="w-full h-28 bg-orange-500 text-white decoration-2 flex justify-between items-center text-5xl pl-4 pr-4 shadow-2xl sticky top-0 z-10">
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
            to="shop"
            onClick={() => {
              setSelected("shop");
            }}
          >
            Shop
          </Link>
          <Link
            className="cursor-pointer hover:scale-105 transition-all"
            to="cart"
          >
            <div>
              <Icon path={mdiCart} size={2.5} />
            </div>
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
}
