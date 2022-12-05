import React, { useContext } from "react";
import { UserAuth } from "../Context/Auth";

const LogoutButton = () => {
  const AuthContext = useContext(UserAuth);
  const { logout } = AuthContext;
  return (
    <div className={`bottom-0 text-center w-full absolute p-5`}>
      <button
        className={`py-[5px] bg-gray-300 text-black text-xl rounded shadow-md w-[90%]`}
        onClick={logout}
      >
        LOGOUT
      </button>
    </div>
  );
};

export default LogoutButton;
