import { createBrowserRouter } from "react-router";
import Root from "../Layout/Root";
import Home from "../Pages/Home";
import Upcoming from "../Pages/Upcoming";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    children: [
      { index: true, Component: Home },
      {path:'/upcoming-events',Component:Upcoming}
    ]
  },
]);
