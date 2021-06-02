import { useAuth } from "@/context/AuthContext";
import { SignInComp } from "@/components/SignInComp";
import Useraccount from "./useraccount";

export default function login() {
  const { user } = useAuth();
  return <main>{user ? <Useraccount /> : <SignInComp />}</main>;
}
