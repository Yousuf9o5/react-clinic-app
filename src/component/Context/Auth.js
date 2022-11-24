import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { BASEURL, loginURL } from "../Constant/WebServices";

const DefaultValue = {
  isAuth: false,
  user: null,
  login: () => Promise.resolve(),
  logout: () => {},
};
export const UserAuth = createContext(DefaultValue);

export const UserAuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);
  const [Authorized, setAuthorized] = useState(false);

  useEffect(() => {
    try {
      const data = localStorage.getItem("userData");
      if (data) {
        setAuthorized(true);
        setUserData(data);
      }
    } catch (err) {
      console.log("not working");
      console.error(err);
    }
  }, []);

  const setSessionData = (data) => {
    if (data) {
      let token = data.token;
      localStorage.setItem("userData", JSON.stringify(data));
      axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    } else {
      console.log("removed");
      localStorage.removeItem("user_data");
      delete axios.defaults.headers.common.Authorization;
    }
  };

  const Login = (username, password) => {
    axios
      .post(`${BASEURL}${loginURL}`, {
        username: username,
        password: password,
      })
      .then((res) => {
        localStorage.setItem("userData", res.data.Data.username);
        setAuthorized(true);
      })
      .catch((err) => console.log(err));
  };

  const Logout = () => {
    localStorage.removeItem("userData");
    setAuthorized(false);
    setUserData(null);
  };

  return (
    <UserAuth.Provider
      value={{
        isAuth: Authorized,
        login: Login,
        logout: Logout,
        user: userData,
      }}
    >
      {children}
    </UserAuth.Provider>
  );
};