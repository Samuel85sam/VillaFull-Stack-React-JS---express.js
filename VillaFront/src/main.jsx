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
import Comments from "./routes/comments.jsx";
import Reservation from "./routes/reservation.jsx";
import Auth from "./routes/auth.jsx"
import IndexAdmin from "./components/index/indexAdmin.jsx";
import IndexUser from "./components/index/indexUser.jsx";
import LandingPage from "./components/index/landingPage.jsx";
import ProtectedRoutes from "./routes/protectedIndex.jsx";
import UserPage from "./components/User/userPage.jsx";
import UserProfile from "./components/User/userProfile.jsx";
import ProtectedUserPages from "./routes/protectedUserPages.jsx";

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
        path: 'user/:target',
        element: <ProtectedUserPages/>,
        errorElement: <div>Oops! There was an error.</div>,
        children:[
          {
            path: "page",
            element: <UserPage />,
            errorElement: <div>Oops! There was an error.</div>,
          },
          {
            path: "profile",
            element: <UserProfile />,
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
