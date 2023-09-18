import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import ErrorPage from "./ErrorPage";
import Home from "./Home/Home";
import Shop from "./Shop/Shop";
import Cart from "./Shop/Cart/Cart";
export default function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage error={null} />,
      children: [
        { path: "home", element: <Home /> },
        {
          path: "shop/products",
          element: <Shop />,
          children: [{ path: "cart", element: <Cart /> }],
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}
