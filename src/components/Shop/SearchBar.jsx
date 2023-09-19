import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import PropTypes from "prop-types";
function SearchBar({ products, handleResult }) {
  const location = useLocation();
  const cartIsOpen = location.pathname.includes("cart");
  let className;
  const [value, setValue] = useState("");

  if (cartIsOpen) {
    className =
      "self-center max-w-[250px] md:min-w-[350px] xl:min-w-[500px] 2xl:min-w-[800px] mt-7 blur-md pointer-events-none shadow-xl rounded-2xl";
  } else {
    className =
      "self-center max-w-[250px] md:min-w-[350px] xl:min-w-[500px] 2xl:min-w-[800px] mt-7 shadow-xl rounded-2xl";
  }

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
      className={className}
      action=""
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <label className="opacity-0 absolute left-[-1000px]" htmlFor="search">
        Search for items
      </label>
      <input
        className="text-md lg:text-xl 2xl:text-3xl w-full rounded-2xl p-3 focus:border-orange-500 border-[1px] outline-none cursor-pointer placeholder:text-gray-300"
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
