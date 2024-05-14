import { Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./Auth/Login";
import Dashboard from "./Dashboard/Dashboard";
import CustomerSupport from "./CustomerSupport/CustomerSupport";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="Dashboard" element={<Dashboard />} />
      <Route path="/CustomerSupport" element={<CustomerSupport />} />
    </Routes>
  );
};

export default App;
