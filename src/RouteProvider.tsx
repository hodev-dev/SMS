import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./assets/style/index.css";
import Dashboard from "./pages/admin/Dashboard";

const RouteProvider = () => {

  return (
    <Router>
      <Routes>
        <Route path="/" element={ <Dashboard /> } />
      </Routes>
    </Router >
  );
};

export default RouteProvider;
