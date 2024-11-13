import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Statistics from "../pages/Statistics";
import Dashboard from "../pages/Dashboard";
import GadgetDetails from "../pages/GadgetDetails";
import Gadgets from "../components/Gadgets";
import AllGadgets from "../pages/AllGadgets";
import ErrorPage from "../components/ErrorPage";
import ContactUs from "../pages/ContactUs";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/categories.json"),
        children: [
          {
            path: "/",
            element: <Gadgets></Gadgets>,
            loader: () => fetch("/gadgets.json"),
          },
          {
            path: "/category/:category",
            element: <Gadgets></Gadgets>,
            loader: () => fetch("/gadgets.json"),
          },
        ],
      },
      {
        path: "/gadgets/:gadgetId",
        element: <GadgetDetails></GadgetDetails>,
        loader: () => fetch("/gadgets.json"),
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
        loader: () => fetch("/gadgets.json"),
      },
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
        loader: () => fetch("/gadgets.json"),
      },
      {
        path: "/allGadgets",
        element: <AllGadgets></AllGadgets>,
        loader: () => fetch("/gadgets.json"),
      },
      {
        path: "/contact",
        element: <ContactUs></ContactUs>,
      },
    ],
  },
]);

export { routes };
