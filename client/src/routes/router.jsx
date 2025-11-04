import React from "react";
import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import Dashboard from "../pages/Admin/Dashboard";
import AddProduct from "../pages/Admin/AddProduct";
import Admin from "../pages/Admin/Admin";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "admin",
        element: <Admin></Admin>,
        children: [
          {
            path: "",
            element: <Dashboard></Dashboard>,
          },
          {
            path: "addProduct",
            element: <AddProduct></AddProduct>,
          },
        ],
      },
    ],
  },
]);

export default router;
