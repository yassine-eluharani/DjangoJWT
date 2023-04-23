import { React, createContext, useState, useEffect } from "react";

const AuthContext = createContext();

export default AuthContext;

export const AuthProvider = ({ children }) => {
  // const [user, setUser] = useState(null);
  const [authTokens, setAuthTokens] = useState(null);
  const loginUser = async (e: React.FormEvent<HTMLFormElement>) => {
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
    });
    const data = await response.then((data) => data.json());
    const status = await response.then((res) => res.status.valueOf());
    // console.log("Data ", data);
    // console.log("Response", status);
    if (status == 200) {
      setAuthTokens(data);
    } else {
      alert("Something went wrong!!");
    }
  };
  const contextData = {
    loginUser: loginUser,
  };
  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  );
};
