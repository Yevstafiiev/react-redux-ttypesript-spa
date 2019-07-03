import React from "react";
import {
  Route, 
  Redirect,
  RouteProps, 
  RouteComponentProps
} from "react-router-dom";
import { checkAuthStatus } from '../../api/auth'

interface PrivateRouteProps extends RouteProps {
  component:
    | React.ComponentType<RouteComponentProps<any>>
    | React.ComponentType<any>;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({
  component: Component,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={props =>
        checkAuthStatus() ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};

export { PrivateRoute };