import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Loading from "dan-components/Loading";

import link from "dan-api/ui/link";
import roles from "dan-api/ui/roles";
import Outer from "../Templates/Outer";
import {
  Login,
  Register,
  ConfirmPassword,
  ComingSoon,
  Maintenance,
  NotFound,
} from "../pageListAsync";
import UserPage from "../Pages/Users/UserPages";
import useAuth from "../../hooks/useAuth";

function Auth() {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) return <Loading />;

  // TODO: Поправить ссылки
  return isAuthenticated ? (
    <Redirect to="/" />
  ) : (
    // <Outer>
    <Switch>
      <Route path={link.auth.root} exact>
        <Redirect to={link.auth.login + `/${roles.client.name}`} />
      </Route>
      <Route path={link.auth.login}>
        <UserPage>
          <Route path={link.auth.login + `/${roles.client.name}`}>
            <Login role={roles.client.id} />
          </Route>
          <Route path={link.auth.login + `/${roles.expert.name}`}>
            <Login role={roles.expert.id} />
          </Route>
        </UserPage>
      </Route>
      <Route path={link.auth.confirmPassword}>
        <UserPage>
          <Route path={link.auth.confirmPassword + `/${roles.client.name}`}>
            <ConfirmPassword role={roles.client.id} />
          </Route>
          <Route path={link.auth.confirmPassword + `/${roles.expert.name}`}>
            <ConfirmPassword role={roles.expert.id} />
          </Route>
        </UserPage>
      </Route>
      <Route path={link.auth.register}>
        <UserPage>
          <Route path={link.auth.register + `/${roles.client.name}`}>
            <Register role={roles.client.id} />
          </Route>
          <Route path={link.auth.register + `/${roles.expert.name}`}>
            <Register role={roles.client.id} />
          </Route>
        </UserPage>
      </Route>

      {/* <Route path={PATH_AUTH.login} component={Login} />
        <Route path={PATH_AUTH.register} component={Register} />
        <Route path={PATH_AUTH.resetPassword} component={ResetPassword} />
        <Route path={PATH_UTILS.maintenance} component={Maintenance} />
        <Route path={PATH_UTILS.comingSoon} component={ComingSoon} /> */}
      <Route component={NotFound} />
    </Switch>
  );
  // </Outer>
}

export default Auth;
