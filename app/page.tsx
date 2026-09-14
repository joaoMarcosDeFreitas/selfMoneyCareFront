import { redirect } from "next/navigation";
import { AuthContext } from "./contexts/AuthContext";
import { useContext } from "react";

export default function Home() {
  const { isAuthenticated } = useContext(AuthContext);

  if(isAuthenticated) {
    redirect("/dashboard");
  } else {
    redirect("/login");
  }
}
