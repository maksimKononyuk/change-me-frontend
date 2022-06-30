import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ArrowForward from '@material-ui/icons/ArrowForward';
import AllInclusive from '@material-ui/icons/AllInclusive';
import Brightness5 from '@material-ui/icons/Brightness5';
import People from '@material-ui/icons/People';
import Icon from '@material-ui/core/Icon';
import Hidden from '@material-ui/core/Hidden';
import brand from 'dan-api/dummy/brand';
import link from 'dan-api/ui/link';
import roles from 'dan-api/ui/roles';
import logo from 'dan-images/logo.svg';
import { TextFieldRedux, CheckboxRedux } from './ReduxFormMUI';
import styles from './user-jss';
import { SnackbarContent } from '@material-ui/core';
import FormErrorSnackbarContent from './FormErrorSnackbarContent';

// validation functions
const required = (value) => (value === null ? 'Required' : undefined);
const email = (value) =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Invalid email'
    : undefined;

const passwordsMatch = (value, allValues) => {
  if (value !== allValues.password) {
    return 'Passwords dont match';
  }
  return undefined;
};

const LinkBtn = React.forwardRef((props, ref) => (
  // eslint-disable-next-line react/prop-types
  <NavLink to={props.to} {...props} innerRef={ref} />
));

function RegisterForm(props) {
  const [tab, setTab] = useState(0);

  const handleChangeTab = (event, value) => {
    setTab(value);
  };

  // eslint-disable-next-line react/prop-types
  const { classes, handleSubmit, pristine, submitting, deco, error } = props;
  return (
    <Fragment>
      <Hidden mdUp>
        <NavLink to="/" className={classNames(classes.brand, classes.outer)}>
          <img src={logo} alt={brand.name} />
          {brand.name}
        </NavLink>
      </Hidden>
      <Paper className={classNames(classes.paperWrap, deco && classes.petal)}>
        <Hidden smDown>
          <div className={classes.topBar}>
            <NavLink to="/" className={classes.brand}>
              <img src={logo} alt={brand.name} />
              {brand.name}
            </NavLink>
            <Button
              size="small"
              className={classes.buttonLink}
              component={LinkBtn}
              to={link.auth.login + `/${roles.expert.name}`}
            >
              <Icon className={classes.icon}>arrow_forward</Icon>
              вход для эксперта
            </Button>
          </div>
        </Hidden>
        <Typography variant="h4" className={classes.title} gutterBottom>
          Регистрация
        </Typography>
        <Typography
          variant="caption"
          className={classes.subtitle}
          gutterBottom
          align="center"
        >
          Для регистрации необходимо подтвердить номер телефона.
        </Typography>
        <section className={classes.formWrap}>
          <form onSubmit={handleSubmit}>
            <div>
              <FormControl className={classes.formControl}>
                <Field
                  name="phone"
                  component={TextFieldRedux}
                  placeholder="Введите номер сотового телефона"
                  label="Мобильный телефон"
                  required
                  className={classes.field}
                />
              </FormControl>
            </div>
            <div>
              <FormControlLabel
                control={
                  <Field
                    name="privacyPolicy"
                    component={CheckboxRedux}
                    required
                    className={classes.agree}
                  />
                }
                label={
                  <p className={classes.confirmLabel}>
                    Согласен с{' '}
                    <a href="#" className={classes.link}>
                      политикой конфиденциалности
                    </a>
                  </p>
                }
              />
            </div>
            {/* <SnackbarContent message="I love cheesecake. I love chocolate." /> */}
            {error && <FormErrorSnackbarContent message={error} />}
            <div className={classes.btnArea}>
              <Button variant="contained" color="primary" type="submit">
                Вход
                <ArrowForward
                  className={classNames(classes.rightIcon, classes.iconSmall)}
                  disabled={submitting || pristine}
                />
              </Button>
            </div>
          </form>
        </section>
      </Paper>
    </Fragment>
  );
}

RegisterForm.propTypes = {
  classes: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  pristine: PropTypes.bool.isRequired,
  submitting: PropTypes.bool.isRequired,
  deco: PropTypes.bool.isRequired,
};

const RegisterFormReduxed = reduxForm({
  form: 'registerForm',
  enableReinitialize: true,
})(RegisterForm);

const RegisterFormMapped = connect((state) => ({
  deco: state.ui.decoration,
}))(RegisterFormReduxed);

export default withStyles(styles)(RegisterFormMapped);
