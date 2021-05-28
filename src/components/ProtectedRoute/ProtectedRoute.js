import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const { isAdmin } = useContext(AuthContext);
  return (
    <>
      {isAdmin ? (
        <Route
          {...rest}
          render={() => {
            return <Component />;
          }}
        />
      ) : (
        <Redirect to={{ pathname: "/" }} />
      )}
    </>
  );
};

export default ProtectedRoute;
