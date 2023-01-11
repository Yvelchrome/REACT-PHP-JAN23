import "./App.scss";
import { Login, Register } from "./pages";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path={"/"} element={<Login />} />
        <Route path={"/login"} element={<Login />} />
        <Route path={"/register"} element={<Register />} />
        <Route path={"*"} element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
