import React from "react";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ isAdmin, component: Component, ...rest }) => {
  return (
    <>
      {isAdmin === "true" ? (
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
