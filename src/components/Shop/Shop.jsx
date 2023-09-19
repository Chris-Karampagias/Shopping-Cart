import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import ItemGrid from "./ItemGrid";
import FullItem from "./FullItem";
import SearchBar from "./SearchBar";
import ErrorPage from "../ErrorPage";
import { useOutletContext } from "react-router-dom";
export default function Shop() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedItem, setSelectedItem] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useOutletContext();
  window.scrollTo({ top: 0, left: 0 });
  const addToCart = (title, image, price, quantity, id) => {
    if (cart.find((prod) => prod.id === id)) {
      return;
    }
    const newCart = [
      ...cart,
      { title, image, price: price * quantity, quantity, id },
    ];
    setCart(newCart);
  };

  const handleItemClick = (product) => {
    const item = {
      title: product.title,
      price: product.price,
      image: product.image,
      description: product.description,
      id: product.id,
    };
    setSelectedItem(item);
    setFilteredProducts([]);
  };

  const goBack = () => {
    setSelectedItem({});
  };

  const handleResult = (newProds) => {
    setFilteredProducts(newProds);
  };

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => {
        if (!res.ok) {
          throw new Error(`This is an HTTP error: The status is ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        const mensClothing = data.filter(
          (item) => item.category === `men's clothing`
        );
        const womensClothing = data.filter(
          (item) => item.category === `women's clothing`
        );
        const newProducts = [...mensClothing, ...womensClothing];
        setProducts(newProducts);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setLoading(false));
  }, []);
  return (
    <main
      className={
        Object.keys(selectedItem).length === 0
          ? "flex flex-col relative gap-5 min-h-screen bg-gradient-to-br from-orange-100 from-10% via-white to-orange-300"
          : " min-h-screen relative bg-gradient-to-br from-orange-100 from-10% via-white to-orange-300"
      }
    >
      {(loading && (
        <h1 className="text-7xl text-center mt-20 mb-[2000px]">Loading...</h1>
      )) ||
        (error && <ErrorPage error={error} />) ||
        (filteredProducts.length === 0 &&
          Object.keys(selectedItem).length === 0 && (
            <>
              <SearchBar products={products} handleResult={handleResult} />
              <ItemGrid products={products} handleItemClick={handleItemClick} />
            </>
          )) ||
        (filteredProducts.length > 0 &&
          Object.keys(selectedItem).length === 0 && (
            <>
              <SearchBar products={products} handleResult={handleResult} />
              <ItemGrid
                products={filteredProducts}
                handleItemClick={handleItemClick}
              />
            </>
          )) ||
        (Object.keys(selectedItem).length > 0 && (
          <>
            <FullItem
              title={selectedItem.title}
              image={selectedItem.image}
              price={selectedItem.price}
              description={selectedItem.description}
              id={selectedItem.id}
              addToCart={addToCart}
              goBack={goBack}
            />
          </>
        ))}
      <Outlet context={[cart, setCart]} />
    </main>
  );
}
