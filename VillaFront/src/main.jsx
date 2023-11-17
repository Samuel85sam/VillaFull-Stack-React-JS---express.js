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
import Comments from "./routes/comments.jsx";
import Reservation from "./routes/reservation.jsx";
import Auth from "./routes/auth.jsx"
import CommentsBook from "./components/comments/commentsBook.jsx";
import CommentDetail from "./components/comments/commentDetail.jsx";
import CommentForm from "./components/comments/commentForm.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <div>ROOT Oops! There was an error.</div>,
    children: [
      {
        index: true,
        element: <Index />,
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
        path: "index",
        element: <Index />,
        errorElement: <div>Oops! There was an error.</div>,
      },
      {
        path: "comments",
        element: <Comments />,
        errorElement: <div>Oops! There was an error.</div>,
        children: [
          {
            index: true,
            element: <CommentsBook />,
            errorElement: <div>Oops! There was an error.</div>,
          },
          {
            path: "commentForm",
            element: <CommentForm />,
            errorElement: <div>Oops! There was an error.</div>,
          },
          {
            path: "commentDetail",
            element: <CommentDetail />,
            errorElement: <div>Oops! There was an error.</div>,
          },
        ]
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
