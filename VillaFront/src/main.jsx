import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import ErrorPage from "./error-page.jsx";
import Root from "./routes/root.jsx";
import Comments from "./routes/comments.jsx";
import Reservation from "./routes/reservation.jsx";
import Auth from "./routes/auth.jsx"
import IndexAdmin from "./routes/index/indexAdmin.jsx";
import IndexUser from "./routes/index/indexUser.jsx";
import ProtectedRoutes from "./routes/protectedRoutes.jsx";
import LandingPage from "./routes/index/landingPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <div>ROOT Oops! There was an error.</div>,
    children: [
      {
        path: 'index',
        element: <ProtectedRoutes />,
        errorElement: <div>Oops! There was an error.</div>,
        children: [
          {
            path: "indexUser",
            element: <IndexUser />,
            errorElement: <div>Oops! There was an error.</div>,
          },
          {
            path: "indexAdmin",
            element: <IndexAdmin />,
            errorElement: <div>Oops! There was an error.</div>,
          },
        ],
      },
      {
        index: true,
        element: <LandingPage />,
        errorElement: <div>Oops! There was an error.</div>,
      },
      {
        index: "landingPage",
        element: <LandingPage />,
        errorElement: <div>Oops! There was an error.</div>,
      },
      {
        path: "auth",
        element: <Auth />,
        errorElement: <ErrorPage />
      },
      {
        path: "reservation",
        element: <Reservation />,
        errorElement: <div>Oops! There was an error.</div>,
      },
      {
        path: "comments",
        element: <Comments />,
        errorElement: <div>Oops! There was an error.</div>,
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
