import React, { useState } from 'react';
import { SubmissionError } from 'redux-form';
import { Helmet } from 'react-helmet';
import brand from 'dan-api/dummy/brand';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { ConfirmPasswordForm } from 'dan-components';
import styles from 'dan-components/Forms/user-jss';
import useAuth from '../../../hooks/useAuth';

function ConfirmPassword(props) {
  const [valueForm, setValueForm] = useState(null);
  const { resetPassword, login, email, phone } = useAuth();

  const submitForm = async (values) => {
    setValueForm(values);
    const { rememberMe, password } = values;
    try {
      await login({
        email,
        password,
        phone,
        rememberMe,
      });
    } catch (exc) {
      console.log(exc);
      throw new SubmissionError({
        ...(exc?.errors && exc?.errors),
        _error:
          exc?.errors?.password || exc?.message || 'Ошибка авторизации!',
      });
    }
  };

  const handleResendPassword = async () => {
    try {
      await resetPassword({ email, phone });
    } catch (exc) {
      throw new SubmissionError({
        ...(exc?.errors && exc?.errors),
        _error:
          exc?.errors?.password || exc?.message || 'Ошибка отправки пароля!',
      });
    }
  };

  const title = brand.name + ' - Confirm password';
  const description = brand.desc;
  const { classes, role } = props;
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
          <ConfirmPasswordForm
            onSubmit={(values) => submitForm(values)}
            handleResend={handleResendPassword}
            role={role}
          />
        </div>
      </div>
    </div>
  );
}

ConfirmPassword.propTypes = {
  classes: PropTypes.object.isRequired,
  role: PropTypes.bool.isRequired,
};

export default withStyles(styles)(ConfirmPassword);
