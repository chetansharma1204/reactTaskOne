import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "../components/pages/SignIn";
import SignUp from "../components/pages/SignUp";
import Home from "../components/pages/Home";
import Dashboard from "../components/pages/Dashboard";
import ProfileSetting from "../components/pages/ProfileSetting";
import Setting from "../components/pages/Setting";
import AboutUs from "../components/pages/About";
import InvalidPage from "../components/pages/PageNotFound";
import PublicRoutes from "./public.routes";
import PrivateRoutes from "./private.routes";

const RouteContainer = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<PublicRoutes><SignIn /></PublicRoutes>} />
        <Route path='/sign-up' element={<PublicRoutes><SignUp /></PublicRoutes>} />
        <Route path='/home' element={<PrivateRoutes><Home /></PrivateRoutes>} />
        <Route path='/dashboard' element={<PrivateRoutes><Dashboard /></PrivateRoutes>} />
        <Route path='/Profile-setting' element={<PrivateRoutes><ProfileSetting /></PrivateRoutes>} />
        <Route path='/setting' element={<PrivateRoutes><Setting /></PrivateRoutes>} />
        <Route path='/about-us' element={<PrivateRoutes><AboutUs /></PrivateRoutes>} />
        <Route path='*' element={<InvalidPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteContainer;
