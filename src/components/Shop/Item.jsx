import PropTypes from "prop-types";

function Item({ title, image, price, onClick }) {
  return (
    <button
      onClick={onClick}
      className=" max-w-[300px] aspect-[1/2] bg-white shadow-2xl rounded-2xl flex gap-2 flex-col justify-between p-2 hover:scale-105 transition-all"
    >
      <h1 className="text-2xl font-bold mt-2 h-[30%] place-self-center">
        {title}
      </h1>
      <img
        className="min-h-[70%] place-self-center mb-5 object-contain "
        src={image}
        alt="The product's image"
      />
      <h2 className="text-3xl font-bold w-full text-start text-orange-500 border-t-[1px] border-gray-300">
        {price}€
      </h2>
    </button>
  );
}

Item.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Item;
