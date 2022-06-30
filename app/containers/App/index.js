import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import link from 'dan-api/ui/link';
import NotFound from 'containers/Pages/Standalone/NotFoundDedicated';
import Auth from './Auth';
import Application from './Application';
import LoginDedicated from '../Pages/Standalone/LoginDedicated';
import ThemeWrapper from './ThemeWrapper';
import useAuth from '../../hooks/useAuth';
window.__MUI_USE_NEXT_TYPOGRAPHY_VARIANTS__ = true;

function App() {
  const { isAuthenticated } = useAuth();
  return (
    <ThemeWrapper>
      <Switch>
        <Route path="/" exact>
          {isAuthenticated ? (
            <Redirect to={link.application.root} />
          ) : (
            <Redirect to={link.auth.root} />
          )}
        </Route>
        <Route path={link.auth.root} component={Auth} />

        <Route path={link.application.root} component={Application} />
        <Route component={NotFound} />
      </Switch>
    </ThemeWrapper>
  );
}

export default App;
