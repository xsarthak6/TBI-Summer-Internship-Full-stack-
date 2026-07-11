import { useEffect, useRef } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

function LoginSuccess() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const hasRun = useRef(false);

  useEffect(() => {
    // Guard against StrictMode's double-invoke in dev, and against
    // re-running after navigate() has already changed the URL.
    if (hasRun.current) return;
    hasRun.current = true;

    const token = searchParams.get("token");
    const id = searchParams.get("id");
    const name = searchParams.get("name");
    const email = searchParams.get("email");

    if (token) {
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify({ id, name, email }));
      navigate("/dashboard", { replace: true });
    } else {
      navigate("/login", { replace: true });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <h1 className="text-2xl font-bold">Logging you in...</h1>
    </div>
  );
}

export default LoginSuccess;