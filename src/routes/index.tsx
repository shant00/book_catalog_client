import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import BookDetails from "../layouts/BookDetails";
import ComingSoon from "../layouts/CommingSoon";
import ContactUs from "../layouts/ContactUs";
import NotFound from "../layouts/NotFound";
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
  }, {
    path: "/blog",
    element: <ComingSoon />,
  },
  {
    path: "/about-us",
    element: <ContactUs />,
  },
  {
    path: "*",
    element: <NotFound />,
  }
]);

export default routes;
