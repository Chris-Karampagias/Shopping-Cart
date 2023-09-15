import Item from "./Item";
import PropTypes from "prop-types";

function ItemGrid({ products }) {
  return (
    <section className="min-h-screen w-100% flex justify-center flex-wrap gap-5 p-2 pt-5 pb-40">
      {products.map((product) => {
        return (
          <Item
            key={product.id}
            title={product.title}
            price={product.price}
            image={product.image}
          />
        );
      })}
    </section>
  );
}

ItemGrid.propTypes = {
  products: PropTypes.array.isRequired,
};

export default ItemGrid;
