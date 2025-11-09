import { createBrowserRouter } from "react-router";
import Root from "../Layout/Root";
import Home from "../Pages/Home";
import Upcoming from "../Pages/Upcoming";
import CreateEvent from "../Pages/CreateEvent";
import ManageEvent from "../Pages/ManageEvent";
import JoinedEvent from "../Pages/JoinedEvent";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    children: [
      { index: true, Component: Home },
      { path: '/upcoming-events', Component: Upcoming },
      {path:'/create-event',element:<CreateEvent></CreateEvent>},
      {path:'/manage-events',element:<ManageEvent></ManageEvent>},
      {path:'/joined-events',element:<JoinedEvent></JoinedEvent>},
    ]
  },
]);
