import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "./firebase";
import { useRouter } from "next/navigation";

const withAuth = (Component) => {
  return function AuthenticatedComponent(props) {
    const [user, setUser] = useState(null);
    const router = useRouter();

    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          setUser(user);
          localStorage.setItem("user", JSON.stringify(user))
        } else {
          router.push("/"); // Redirect to sign-in page if not logged in
        }
      });
      return () => unsubscribe();
    }, [router]);

    if (!user) {
      return <div className="h-screen text-white w-screen font-bold tracking-wider text-2xl flex items-center justify-center">
        <span>Loading...</span>
      </div>;
    }

    return <Component {...props} user={user} />;
  };
};

export default withAuth;
