import { useState } from "react";
import bgImage from "../assets/bgphoto.jpg";
import { Lock, Mail } from "lucide-react";

const Login = ({ setShowLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setMessage("Please fill all fields.");
    } else {
      setMessage("Login successful!");
    }
  };

  return (
    <div
      className="min-h-screen w-full flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <form
        onSubmit={handleLogin}
        className="bg-opacity-80 backdrop-blur-md p-9 rounded-lg shadow-lg w-full max-w-sm"
      >
        <h2 className="text-4xl font-bold mb-12 text-center">Login</h2>
        <div className="flex items-center gap-3 border-b border-gray-400 mb-6 p-2  rounded">
          <Mail className="text-gray-600" />
          <input
            type="email"
            placeholder="Email"
            className="w-full bg-transparent outline-none text-gray-800 placeholder:text-gray-300"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="flex items-center gap-3 border-b border-gray-400 mb-9 p-2  rounded">
          <Lock className="text-gray-600" />
          <input
            type="password"
            placeholder="Password"
            className="w-full bg-transparent outline-none text-white placeholder:text-gray-300"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button
          type="submit"
          className="bg-gradient-to-r from-gray-700 to-gray-900 text-white w-full p-2 rounded hover:bg-none hover:border-[1px] hover:text-gray-900 font-semibold cursor-pointer transition"
        >
          Login
        </button>

        <p className="text-sm mt-4 text-center text-gray-700">{message}</p>
      </form>
      <div className="text-center mt-4  bg-gray-900/90 w-80 h-70 flex items-center justify-center flex-col   transition-all duration-700 ease-in-out transform hover:scale-105 rounded-bl-full rounded-tr-full">
      <h2 className="text-white mb-9 transition-opacity duration-700">New here?</h2>
          <button
            type="button"
            onClick={() => setShowLogin(false)}
            className="text-black p-2 px-4 bg-white cursor-pointer hover:bg-gray-300 font-semibold  transition-colors duration-500"
          >
            Sign up
          </button>
        </div>
    </div>
  );
};

export default Login;
