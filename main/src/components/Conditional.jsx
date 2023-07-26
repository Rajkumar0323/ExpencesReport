import React from "react";
import { Outlet, Navigate } from "react-router-dom";
export default function Conditional() {
  const auth = localStorage.getItem("token");
  return auth ? <Outlet /> : <Navigate to="/signup"></Navigate>;
}
