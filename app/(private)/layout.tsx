"use client";

import { NavBar } from "../components/organisms/NavBar";
import "../globals.css";
import { redirect } from "next/navigation";
import { AuthContext } from "../contexts/AuthContext";
import { useContext } from "react";

export default function Privateayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isAuthenticated } = useContext(AuthContext);

  if(!isAuthenticated) {
    redirect("/login");
  }

  return (
    <div className="min-h-full max-h-full flex">
      <NavBar/>
      {children}
    </div>
  );
}
