import React from "react";
import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <div>
      <h2>This is Main Layout</h2>
      <Outlet></Outlet>
    </div>
  );
};

export default MainLayout;
