import { useEffect, useState } from "react";
import PropTypes from "prop-types";
function SearchBar({ products, handleResult }) {
  const [value, setValue] = useState("");
  useEffect(() => {
    const filteredProducts = [];
    products.forEach((product) => {
      if (product.title.toLowerCase().includes(value.toLowerCase())) {
        filteredProducts.push(product);
        handleResult(filteredProducts);
      }
    });
  }, [value]);
  return (
    <form
      className="self-center mt-7 shadow-xl rounded-2xl"
      action=""
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <label className="opacity-0 absolute left-[-1000px]" htmlFor="search">
        Search for items
      </label>
      <input
        className="text-4xl rounded-2xl p-2 focus:border-orange-500 border-[1px] outline-none cursor-pointer placeholder:text-gray-300"
        type="text"
        value={value}
        placeholder="Search for anything..."
        id="search"
        onInput={(e) => {
          setValue(e.target.value);
        }}
      />
    </form>
  );
}

SearchBar.propTypes = {
  products: PropTypes.array.isRequired,
  handleResult: PropTypes.func.isRequired,
};

export default SearchBar;
