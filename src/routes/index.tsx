import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import BookDetails from "../layouts/BookDetails";
import AllBooks from "../pages/AllBooks";
import Login from "../pages/Login";
import Registration from "../pages/Registration";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/registration",
    element: <Registration />,
  }, {
    path: "/book-details/:id",
    element: <BookDetails />,
  }, {
    path: "/books",
    element: <AllBooks />,
  },
]);

export default routes;
