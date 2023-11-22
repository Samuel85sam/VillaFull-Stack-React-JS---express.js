import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  useRoutes,
} from "react-router-dom";
import './index.css'
import useAuthStore from "./store/authStore.jsx";
import ErrorPage from "./error-page.jsx";
import Root from "./routes/root.jsx";
import IndexLandingPage from "./routes/indexLandingPage.jsx";
import UserDashboard from "./routes/indexGuardedPages/userDashboard.jsx";
import AdminDashboard from "./routes/indexGuardedPages/AdminDashboard.jsx";
import Comments from "./routes/comments.jsx";
import Reservation from "./routes/reservation.jsx";
import Auth from "./routes/auth.jsx"


const Main = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <div>ROOT Oops! There was an error.</div>,
      children: [
        {
          index: true,
          element: <IndexLandingPage />,
          errorElement: <div>Oops! There was an error.</div>,
        },
        {
          path: "indexLandingPage",
          element: <IndexLandingPage />,
          errorElement: <div>Oops! There was an error.</div>,
          children: [
            {
              path: "userDashboard",
              element: useAuthStore.getState().isAuthenticated ? <UserDashboard /> : <Auth />,
              errorElement: <div>Oops! There was an error.</div>,
            },
            {
              path: "adminDashboard",
              element: useAuthStore.getState().isAuthenticated ? <AdminDashboard /> : <Auth />,
              errorElement: <div>Oops! There was an error.</div>,
            },
          ]
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

  const routeElement = useRoutes(router);

  React.useEffect(() => {
    const token = localStorage.getItem('token')

    if (token) {
      useAuthStore.getState().authenticate(token);
    }
  }, [])



  return (

    <React.StrictMode>
      <RouterProvider router={router}>
        <Root>
          {routeElement}
        </Root>
      </RouterProvider>
    </React.StrictMode>
  );

}

ReactDOM.createRoot(document.getElementById('root')).render(<Main />)

{/* <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>, */}
