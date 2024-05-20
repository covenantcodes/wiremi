import { Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./Auth/Login";
import Dashboard from "./Dashboard/Dashboard";
import CustomerSupport from "./CustomerSupport/CustomerSupport";
import ClientArea from "./Client/ClientArea";
import Kyc from "./KYC/Kyc";
import Finance from "./Finance/Finance";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="Dashboard" element={<Dashboard />} />
      <Route path="/CustomerSupport" element={<CustomerSupport />} />
      <Route path="/ClientArea" element={<ClientArea />} />
      <Route path="/Kyc" element={<Kyc />} />
      <Route path="/Finance" element={<Finance />} />
    </Routes>
  );
};

export default App;
