import "./App.scss";
import { Login } from "./pages";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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

function App() {
  return (
    <Router>
      <Routes>
        <Route path={"/"} element={<Login />} />
        <Route path={"/home"} element={<Home />} />
        <Route path={"*"} element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
