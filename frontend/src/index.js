import React from "react";
import ReactDOM from "react-dom/client";
import "./globels.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Registration from "./pages/Registeration";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

const router = createBrowserRouter([
  { path: "/", element: <Dashboard /> },
  { path: "/register", element: <Registration /> },
  { path: "/login", element: <Login /> },
  { path: "/*", element: <NotFound /> },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
