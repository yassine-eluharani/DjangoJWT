import { React, createContext, useState, useEffect } from "react";

const AuthContext = createContext();

export default AuthContext;

export const AuthProvider = ({ children }) => {
  // const [user, setUser] = useState(null);
  // const [authToken, setAuthToken] = useState(null);
  const loginUser = async (e) => {
    e.preventDefault();
    const response = fetch("http://localhost:8000/api/token/", {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify({
        username: e.target.username.value,
        password: e.target.password.value,
      }),
    }).then((data) => data.json());
    const data = await response;
    console.log(data);
  };
  const contextData = {
    loginUser: loginUser,
  };
  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  );
};
