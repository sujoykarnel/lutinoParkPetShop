import React from "react";
import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import Dashboard from "../pages/Admin/Dashboard";
import AddProduct from "../pages/Admin/AddProduct";
import Admin from "../pages/Admin/Admin";
import AddMaterial from "../pages/Admin/Material/AddMaterial";
import AddUom from "../pages/Admin/AddUom";
import SignIn from "../pages/SignIn/SignIn";
import SignUp from "../pages/SignUp/SignUp";
import MaterialLayout from "../pages/Admin/Material/MaterialLayout";
import Materials from "../pages/Admin/Material/Materials";
import UpdateMaterials from "../pages/Admin/Material/UpdateMaterials";
import { api } from "../api/api";

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
        path: "/signIn",
        element: <SignIn></SignIn>,
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>,
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
            path: "materials",
            element: <MaterialLayout></MaterialLayout>,
            children: [
              {
                path: "",
                element: <Materials></Materials>,
              },
              {
                path: "update/:id",
                element: <UpdateMaterials></UpdateMaterials>,
                loader: ({ params }) => {
                  return api
                    .get(`/materials/${params.id}`)
                    .then((res) => res.data);
                },
              },
              {
                path: "addMaterial",
                element: <AddMaterial></AddMaterial>,
              },
            ],
          },
          {
            path: "addProduct",
            element: <AddProduct></AddProduct>,
          },
          {
            path: "addUom",
            element: <AddUom></AddUom>,
          },
        ],
      },
    ],
  },
]);

export default router;
