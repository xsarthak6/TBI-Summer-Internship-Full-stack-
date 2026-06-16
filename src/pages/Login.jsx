import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Login() {
  return (
    <>
      <Navbar />

      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-4">Login Page</h1>

        <p className="text-gray-600">
          Login functionality will be added in future weeks.
        </p>
      </div>

      <Footer />
    </>
  );
}

export default Login;