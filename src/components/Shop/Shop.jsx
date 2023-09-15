import { useState, useEffect } from "react";
import ItemGrid from "./ItemGrid";
import FullItem from "./FullItem";
import SearchBar from "./SearchBar";
export default function Shop() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedItem, setSelectedItem] = useState({});

  const handleItemClick = (product) => {
    const item = {
      title: product.title,
      price: product.price,
      image: product.image,
      description: product.description,
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
      .then((res) => res.json())
      .then((data) => {
        const mensClothing = data.filter(
          (item) => item.category === `men's clothing`
        );
        const womensClothing = data.filter(
          (item) => item.category === `women's clothing`
        );
        const newProducts = [...mensClothing, ...womensClothing];
        setProducts(newProducts);
      });
  }, []);
  return (
    <main
      className={
        Object.keys(selectedItem).length === 0
          ? "flex flex-col gap-5 min-h-screen bg-gradient-to-br from-orange-100 from-10% via-white to-orange-300"
          : " min-h-screen bg-gradient-to-br from-orange-100 from-10% via-white to-orange-300"
      }
    >
      {filteredProducts.length === 0 &&
        Object.keys(selectedItem).length === 0 && (
          <>
            <SearchBar products={products} handleResult={handleResult} />
            <ItemGrid products={products} handleItemClick={handleItemClick} />
          </>
        )}
      {filteredProducts.length > 0 &&
        Object.keys(selectedItem).length === 0 && (
          <>
            <SearchBar products={products} handleResult={handleResult} />
            <ItemGrid
              products={filteredProducts}
              handleItemClick={handleItemClick}
            />
          </>
        )}
      {Object.keys(selectedItem).length > 0 && (
        <FullItem
          title={selectedItem.title}
          image={selectedItem.image}
          price={selectedItem.price}
          description={selectedItem.description}
          goBack={goBack}
        />
      )}
    </main>
  );
}
