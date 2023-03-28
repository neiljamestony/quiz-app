import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./component/Login";
import Dashboard from "./component/Dashboard";
import Category from "./component/category";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/createAccount" element={<Login />} />
          <Route path="/category" element={<Category />} />
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
