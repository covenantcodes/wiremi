import { Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./Auth/Login";
import Dashboard from "./Dashboard/Dashboard";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="Dashboard" element={<Dashboard />} />
    </Routes>
  );
};

export default App;
