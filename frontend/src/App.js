import "./App.scss";
import {} from "./pages";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
      <Router>
        <Routes>
          <Route path={"/"} element={}/>
          <Route path={"*"} element={}/>
        </Routes>
      </Router>
  );
}

export default App;
