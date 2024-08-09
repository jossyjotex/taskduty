import React, { createContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(undefined);
  const token = localStorage.getItem("token");

  async function getLoggedIn() {
    const req = await fetch("http://localhost:6767/api/isloggedin", {
      method: "GET",
      headers: {
        Authorization: `bearer ${token}`,
      },
    });
    const data = await req.json();
    console.log(data);
    setLoggedIn(data);
  }
//   LOGGED OUT FUNCTION
const logout = ()=>{
    localStorage.removeItem('token');
    setLoggedIn(false)  
}

  useEffect(() => {
    getLoggedIn();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        getLoggedIn,
        loggedIn,
        setLoggedIn,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
