import React from "react";
import { Outlet } from "react-router";

const MaterialLayout = () => {
  return (
    <div>
      <Outlet></Outlet>
    </div>
  );
};

export default MaterialLayout;
