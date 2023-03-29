import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import About from "./Components/About";
import Friends from "./Components/Friends";
import Home from "./Components/Home";
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
