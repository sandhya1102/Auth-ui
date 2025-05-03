import { useState } from "react";
import bgImage from "../assets/bgphoto.jpg";
import { Lock, Mail } from "lucide-react";

const Signup = ({ setShowLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();
    alert("Signup successful!");
  };

  return (
    <div
      className="min-h-screen w-full flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div
        className="text-center mt-4 bg-gray-900/90 w-80 h-70 flex items-center justify-center flex-col
             transition-all duration-700 ease-in-out transform hover:scale-105 rounded-br-full rounded-tl-full active:translate-x-96"
      >
        <h2 className="text-white mb-9 transition-opacity duration-700">
          Already have account?
        </h2>
        <button
          type="button"
          onClick={() => setShowLogin(true)}
          className="text-black p-2 px-4 bg-white cursor-pointer hover:bg-gray-300 font-semibold
               transition-colors duration-500 "
        >
          Login
        </button>
      </div>
      <form
        onSubmit={handleSignup}
        className="bg-opacity-80 backdrop-blur-md p-9 rounded-lg shadow-lg w-full max-w-sm "
      >
        <h2 className="text-4xl font-bold mb-12 text-center">Sign Up</h2>

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
          className="bg-gradient-to-r from-gray-700 to-gray-900  text-white w-full py-2 rounded hover:bg-none hover:border-[1px] hover:text-gray-900 font-semibold transition cursor-pointer"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Signup;
