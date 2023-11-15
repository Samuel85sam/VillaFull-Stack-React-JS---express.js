import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import ErrorPage from "./error-page.jsx";
import Root from "./routes/root.jsx";
import Index from "./routes/index.jsx";
import Avis from "./routes/avis.jsx";
import Reservation from "./routes/reservation.jsx";
import Auth from "./routes/auth.jsx"


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children:[
      {
        index: true, 
        element: <Index /> ,
        errorElement: <div>Oops! There was an error.</div>,
      },
      {
        path: "auth",
        element: <Auth />,
        errorElement: <div>Oops! There was an error.</div>,
      },
      {
        path: "reservation",
        element: <Reservation />,
        errorElement: <div>Oops! There was an error.</div>,
      },
      {
        path: "index",
        element: <Index />,
        errorElement: <div>Oops! There was an error.</div>,
       },
      {
        path: "reservation",
        element: <Reservation />,
        errorElement: <div>Oops! There was an error.</div>,
      },
      {
        path: "avis",
        element: <Avis />,
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
