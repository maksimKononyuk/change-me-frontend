import React, { useContext } from 'react';
import { PropTypes } from 'prop-types';
import { Switch, Route, Redirect } from 'react-router-dom';
import link from 'dan-api/ui/link';
import roles from 'dan-api/ui/roles';
import Loading from 'dan-components/Loading';

import Dashboard from '../Templates/Dashboard';
import { ThemeContext } from './ThemeWrapper';
import {
  Parent,
  DashboardPage,
  HomePage,
  Form,
  Table,
  Error,
  NotFound,
  PersonalDashboard,
  ProfilePage,
  ExpertsPage,
} from '../pageListAsync';
import ChangeAvatar from '../Profile/changeAvatar';
import EditFillProfile from '../Profile/editProfile';
import useAuth from '../../hooks/useAuth';

function Application(props) {
  const { history } = props;
  const changeMode = useContext(ThemeContext);
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) return <Loading />;

  return !isAuthenticated ? (
    <Redirect to="/" />
  ) : (
    <Switch>
      <Dashboard
        history={history}
        changeMode={changeMode}
        layout="top-navigation"
      >
        <Switch>
          <Route path={link.application.root} exact>
            <Redirect to={link.application.home} />
          </Route>

          <Route
            exact
            path={link.application.home}
            component={PersonalDashboard}
          />
          <Route
            exact
            path={link.application.experts}
            component={ExpertsPage}
          />
          <Route exact path={link.profile.root}>
            <ProfilePage owner />
          </Route>
          <Route exact path={`${link.profile.root}/expert/:id`}>
            <ProfilePage />
          </Route>
          <Route path={link.profile.edit} component={EditFillProfile}>
            <EditFillProfile />
          </Route>
          <Route path={link.profile.changeAvatar} component={ChangeAvatar} />
          {/* <Route exact path="/app/blank-page" component={HomePage} /> */}
          <Route path="/app/pages/dashboard" component={DashboardPage} />
          <Route path="/app/pages/form" component={Form} />
          <Route path="/app/pages/table" component={Table} />
          <Route path="/app/pages/not-found" component={NotFound} />
          <Route path="/app/pages/error" component={Error} />
          <Route exact path="/app/pages" component={Parent} />
          <Route component={NotFound} />
        </Switch>
      </Dashboard>
    </Switch>
  );
}

Application.propTypes = {
  history: PropTypes.object.isRequired,
};

export default Application;
