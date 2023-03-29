import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import About from "./Components/About";
import FriendDetails from "./Components/FriendDetails";
import Friends from "./Components/Friends";
import Home from "./Components/Home";
import Posts from "./Components/Posts";
import "./index.css";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/home", element: <Home /> },
      { path: "/about", element: <About /> },
      {
        path: "/friends",
        element: <Friends />,
        loader: async () => {
          return await fetch("https://jsonplaceholder.typicode.com/users");
        },
      },
      {
        path: "/friend/:id",
        loader: async ({params}) => {
          return await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);
        },
        element: <FriendDetails />,
      },
      {
        path: "/posts",
        loader: async () => {
          return await fetch("https://jsonplaceholder.typicode.com/posts");
        },
        element: <Posts/>,
      }
    ],
  },
  {
    path: "*",
    element: <div className="text-center">404</div>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
