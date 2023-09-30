import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import LoginPage from "../pages/LoginPage/LoginPage";
import RegisterPage from "../pages/RegisterPage/RegisterPage";
import PublicRoutes from "./PublicRoutes.jsx";
import PrivateRoutes from "./PrivateRoutes.jsx";

const MainRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<PrivateRoutes><HomePage /></PrivateRoutes>} />
        <Route path="/login" element={<PublicRoutes><LoginPage /></PublicRoutes>}/>
        <Route path="/register" element={<PublicRoutes><RegisterPage/></PublicRoutes>}/>
    </Routes>
  );
};

export default MainRoutes;
