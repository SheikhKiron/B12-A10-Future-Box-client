import { createBrowserRouter } from 'react-router';
import Root from '../Layout/Root';
import Home from '../Pages/Home';
import Upcoming from '../Pages/Upcoming';
import CreateEvent from '../Pages/CreateEvent';
import ManageEvent from '../Pages/ManageEvent';
import JoinedEvent from '../Pages/JoinedEvent';
import Register from '../Pages/Register';
import Login from '../Pages/Login';
import EventDetails from '../Pages/EventDetails';
import Update from '../Pages/Update';
import PrivateRouter from '../Auth/PrivateRouter';
import Error from '../Pages/Error';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    errorElement:<Error></Error>,
    children: [
      { index: true, Component: Home },
      {
        path: '/upcoming-events',
        Component: Upcoming,
      },
      { path: '/register', Component: Register },
      { path: '/login', Component: Login },
      {
        path: '/create-event',
        element: (
          <PrivateRouter>
            <CreateEvent></CreateEvent>
          </PrivateRouter>
        ),
      },
      {
        path: '/manage-events',
        element: (
          <PrivateRouter>
            <ManageEvent></ManageEvent>
          </PrivateRouter>
        ),
      },
      {
        path: '/joined-events',
        element: (
          <PrivateRouter>
            <JoinedEvent></JoinedEvent>
          </PrivateRouter>
        ),
      },
      {
        path: '/event-details/:id',
        element: (
         
            <EventDetails></EventDetails>
        
        ),
        loader: ({ params }) =>
          fetch(
            `https://social-development-server-three.vercel.app/events/${params.id}`
          ),
      },
      {
        path: '/event/update/:id',
        element: (
          <PrivateRouter>
            <Update></Update>
          </PrivateRouter>
        ),
        loader: ({ params }) =>
          fetch(
            `https://social-development-server-three.vercel.app/events/${params.id}`
          ),
      },
    ],
  },
]);
