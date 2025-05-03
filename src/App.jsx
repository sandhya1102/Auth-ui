import { useState } from "react";
import Login from "./components/Login";
import Signup from "./components/Signup";

function App() {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <div>
      {showLogin ? (
        <Login setShowLogin={setShowLogin} />
      ) : (
        <Signup setShowLogin={setShowLogin} />
      )}
    </div>
  );
}

export default App;
