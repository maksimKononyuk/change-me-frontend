import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { SubmissionError } from 'redux-form';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import brand from 'dan-api/dummy/brand';
import link from 'dan-api/ui/link';
import roles from 'dan-api/ui/roles';
import { RegisterForm } from 'dan-components';
import styles from 'dan-components/Forms/user-jss';
import useAuth from '../../../hooks/useAuth';

function Register(props) {
  const [valueForm, setValueForm] = useState(null);
  const { register } = useAuth();
  const history = useHistory();

  const submitForm = async (values) => {
    setValueForm(values);
    try {
      const { email, phone, privacyPolicy } = values;
      // TODO: исправить роль
      if (privacyPolicy) {
        const role = 4;
        await register({ email, phone, roleId: role });
        history.push(
          link.auth.confirmPassword +
            (role === roles.client.id
              ? `/${roles.client.name}`
              : `/${roles.expert.name}`)
        );
      }
      //
    } catch (exc) {
      throw new SubmissionError({
        ...(exc?.errors && exc?.errors),
        _error:
          exc?.errors?.phone ||
          exc?.errors?.email ||
          exc?.message ||
          'Ошибка регистрации!',
      });
    }
  };

  const title = brand.name + ' - Register';
  const description = brand.desc;
  const { classes } = props;
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
          <RegisterForm onSubmit={(values) => submitForm(values)} />
        </div>
      </div>
    </div>
  );
}

Register.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Register);
