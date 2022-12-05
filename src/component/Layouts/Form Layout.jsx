import React from "react";
import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UserAuth } from "../Context/Auth";
import themeContext from "../Context/theme";
import LogoutButton from "./logout";
import SideBar from "./SideBar";
import Switcher from "./Switcher";

const Layout = () => {
  const ThemeContext = useContext(themeContext);
  const authContext = useContext(UserAuth);
  const { isAuth } = authContext;
  if (!isAuth) return <Navigate to="/login" />;
  return (
    <div className={`flex ${ThemeContext.theme.background} `}>
      <div
        className={`w-72 h-screen ${ThemeContext.theme.sideBar} shadow-xl relative z-1`}
      >
        <div className={`text-3xl ${ThemeContext.theme.font} my-10 mx-9`}>
          <h1>CLINIC APP</h1>
        </div>
        <SideBar id={""} />
        <LogoutButton />
      </div>
      <div className=" w-full h-full">
        <div className={` p-8 bg-blue-500 relative items-center flex`}>
          <div className=" absolute right-0">
            <Switcher />
          </div>
        </div>
        <div className=" w-full h-full  items-center p-20">
          {/* ماعون الزلاطة */}
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
