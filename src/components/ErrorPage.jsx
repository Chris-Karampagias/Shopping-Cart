import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <div className="text-7xl text-center h-[800px] flex justify-center gap-10 flex-col">
      <h1>Whoops! Something went wrong!</h1>
      <h2>
        Click{" "}
        <Link className="hover:underline text-orange-500 cursor-pointer" to="/">
          here
        </Link>{" "}
        to return to the homepage
      </h2>
    </div>
  );
}
