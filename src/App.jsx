import { Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./Auth/Login";
import Dashboard from "./Dashboard/Dashboard";
import CustomerSupport from "./CustomerSupport/CustomerSupport";
import ClientArea from "./Client/ClientArea";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="Dashboard" element={<Dashboard />} />
      <Route path="/CustomerSupport" element={<CustomerSupport />} />
      <Route path="/ClientArea" element={<ClientArea />} />
    </Routes>
  );
};

export default App;
