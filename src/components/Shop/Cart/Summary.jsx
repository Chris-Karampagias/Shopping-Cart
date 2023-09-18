import PropTypes from "prop-types";
function Summary({ cart }) {
  let total = cart.reduce((sum, prod) => sum + prod.price, 0).toString();
  let decimalIndex = total.indexOf(".");
  let decimal = total.substr(decimalIndex);
  if (decimal.length > 2) {
    total = total.substr(0, decimalIndex + 3);
  }

  return (
    <section
      data-testid="summary"
      className="mt-auto border-t-[1px] pt-1 text-4xl mb-10 flex flex-col gap-10"
    >
      <h1>
        <span className="font-bold ml-2">Total:</span> {total}€
      </h1>
      <button className="text-white bg-orange-500 w-fit self-center p-2 rounded-2xl hover:scale-105 transition-all duration-200 cursor-pointer">
        Proceed to checkout{" "}
      </button>
    </section>
  );
}

Summary.propTypes = {
  cart: PropTypes.array.isRequired,
};

export default Summary;
