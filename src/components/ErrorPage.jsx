import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function ErrorPage({ error }) {
  return (
    <main className="text-2xl md:text-7xl text-center h-[800px] flex justify-center gap-10 flex-col">
      <h1>Whoops! Something went wrong!</h1>
      <p className="text-gray-500">{error}</p>
      <h2>
        Click{" "}
        <Link
          className="hover:underline text-orange-500 cursor-pointer"
          to="/home"
        >
          here
        </Link>{" "}
        to return to the homepage
      </h2>
    </main>
  );
}

ErrorPage.propTypes = {
  error: PropTypes.oneOfType([(PropTypes.string, PropTypes.object)]),
};

export default ErrorPage;
