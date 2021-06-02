import { useAuth } from "@/context/AuthContext";
import UsernameForm from "@/components/UsernameForm";

export default function enter() {
  const { user, username, signOut } = useAuth();
  return (
    <main>
      {user ? <button onClick={signOut}>Sign Out</button> : <SignInButton />}
    </main>
  );
}
