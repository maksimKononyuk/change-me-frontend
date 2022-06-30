import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import brand from 'dan-api/dummy/brand';
import link from 'dan-api/ui/link';
import roles from 'dan-api/ui/roles';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { LoginForm } from 'dan-components';
import styles from 'dan-components/Forms/user-jss';
import useAuth from '../../../hooks/useAuth';
import { useHistory } from 'react-router-dom';
import { SubmissionError } from 'redux-form';

function Login(props) {
  const { classes, role } = props;

  const history = useHistory();
  const [valueForm, setValueForm] = useState(null);
  const { resetPassword } = useAuth();

  const submitForm = async (values) => {
    setValueForm(values);
    const { email, phone } = values;

    try {
      await resetPassword({ email, phone });
      // TODO: Исправить ролирование
      history.push(
        link.auth.confirmPassword +
          (role === roles.client.id
            ? `/${roles.client.name}`
            : `/${roles.expert.name}`)
      );
    } catch (exc) {
      throw new SubmissionError({
        ...(exc?.errors && exc?.errors),
        _error:
          exc?.errors?.phone ||
          exc?.errors?.email ||
          exc?.message ||
          'Ошибка авторизации!',
      });
    }
  };

  const title = brand.name + ' - Login';
  const description = brand.desc;
  return (
    <div className={classes.root}>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
      </Helmet>
      <div className={classes.container}>
        <div className={classes.userFormWrap}>
          <LoginForm onSubmit={(values) => submitForm(values)} role={role} />
        </div>
      </div>
    </div>
  );
}

Login.propTypes = {
  classes: PropTypes.object.isRequired,
  role: PropTypes.bool.isRequired,
};

export default withStyles(styles)(Login);
