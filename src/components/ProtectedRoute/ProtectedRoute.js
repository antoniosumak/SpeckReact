import React from "react";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (rest.isAdmin === "true") {
          return <Component />;
        } else {
          <Redirect to={{ pathname: "/", state: { from: props.location } }} />;
        }
      }}
    />
  );
};

export default ProtectedRoute;
