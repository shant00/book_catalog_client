import { useState } from "react";
import { Link } from "react-router-dom";
import background from "../assets/login_background.jpg";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Add your login logic here
    console.log("email:", email);
    console.log("Password:", password);
  };

  return (
    <div
      className="flex justify-center items-center min-h-screen bg-cover"
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      <div className="bg-white p-8  rounded shadow-md max-w-xl mx-4 sm:mx-auto ">
        <div className="flex items-center justify-center">
          <h2 className="text-2xl font-semibold mb-4">Login</h2>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium">Email</label>
          <input
            type="text"
            className="w-full border rounded px-3 py-2 focus:outline-none focus:border-blue-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium">Password</label>
          <input
            type="password"
            className="w-full border rounded px-3 py-2 focus:outline-none focus:border-blue-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-200"
          onClick={handleLogin}
        >
          Log In
        </button>

        <div className="mt-2 text-center">
          Don't Have Any Account?{" "}
          <Link
            to="/registration"
            className="text-blue-500 hover:underline hover:text-blue-600"
          >
            Register Now
          </Link>
        </div>
      </div>
    </div>
  );
}
