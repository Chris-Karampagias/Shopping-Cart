import { useOutletContext } from "react-router-dom";
import ItemsInCart from "./ItemsInCart";
import Summary from "./Summary";
export default function Cart() {
  const [cart, setCart] = useOutletContext();

  return (
    <aside className="min-h-screen w-[500px] absolute top-[-112px] z-10 right-0 bg-white text-2xl border-2 border-black">
      <ItemsInCart cart={cart} />
      <Summary cart={cart} />
    </aside>
  );
}
