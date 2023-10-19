import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    fetch("/brands.json")
      .then((res) => res.json())
      .then((data) => setBrands(data));
  }, []);

  const authInfo = {
    brands,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};

export default AuthProvider;
