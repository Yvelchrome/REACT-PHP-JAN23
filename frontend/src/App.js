import "./App.scss";
import { Login, Register } from "./pages";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
<<<<<<< HEAD
import { useEffect } from "react";
import Home from "./pages/Home/Home";

/*useEffect(() => {
  fetch("http://backend/register", {
    method: "POST",
    body: JSON.stringify({
      username: 'Fred',
      password: 'passwordw'
    }),
  })
}).then(data => data.JSON()).then(data => console.log(data))*/
=======
>>>>>>> 2f4af76be79df4cd8c6da2f0a0fd071ceaa4bc05

function App() {
  return (
    <Router>
      <Routes>
        <Route path={"/"} element={<Login />} />
<<<<<<< HEAD
        <Route path={"/home"} element={<Home />} />
=======
        <Route path={"/login"} element={<Login />} />
        <Route path={"/register"} element={<Register />} />
>>>>>>> 2f4af76be79df4cd8c6da2f0a0fd071ceaa4bc05
        <Route path={"*"} element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
