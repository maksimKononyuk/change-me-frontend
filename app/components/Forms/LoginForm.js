import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import { Field, reduxForm } from 'redux-form';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import InputAdornment from '@material-ui/core/InputAdornment';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import AllInclusive from '@material-ui/icons/AllInclusive';
import Brightness5 from '@material-ui/icons/Brightness5';
import People from '@material-ui/icons/People';
import ArrowForward from '@material-ui/icons/ArrowForward';
import Paper from '@material-ui/core/Paper';
import Icon from '@material-ui/core/Icon';
import Hidden from '@material-ui/core/Hidden';
import brand from 'dan-api/dummy/brand';
import logo from 'dan-images/logo.svg';
import link from 'dan-api/ui/link';
import roles from 'dan-api/ui/roles';
import { TextFieldRedux, CheckboxRedux } from './ReduxFormMUI';
import styles from './user-jss';
import { ContentDivider } from '../Divider';
import FormErrorSnackbarContent from './FormErrorSnackbarContent';

// validation functions
const required = (value) => (value === null ? 'Required' : undefined);
const email = (value) =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Invalid email'
    : undefined;

const LinkBtn = React.forwardRef(
  (props, ref) => (
    // eslint-disable-line
    <NavLink to={props.to} {...props} innerRef={ref} />
  ) // eslint-disable-line
);

function LoginForm(props) {
  // const [showPassword, setShowPassword] = useState(false);

  // const handleClickShowPassword = () => {
  //   setShowPassword((show) => !show);
  // };

  // const handleMouseDownPassword = (event) => {
  //   event.preventDefault();
  // };

  const { classes, handleSubmit, pristine, submitting, deco, role, error } =
    props;

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
              // TODO: Исправить ссылку по ролям
              to={
                link.auth.login +
                (role === roles.client.id
                  ? `/${roles.expert.name}`
                  : `/${roles.client.name}`)
              }
            >
              <Icon className={classes.icon}>arrow_forward</Icon>
              {role === roles.client.id
                ? 'вход для эксперта'
                : 'вход для пользователей'}
            </Button>
          </div>
        </Hidden>
        <Typography variant="h4" className={classes.title} gutterBottom>
          Вход
        </Typography>
        <Typography
          variant="caption"
          className={classes.subtitle}
          gutterBottom
          align="center"
        >
          {role === roles.client.id
            ? 'Для зарегистрированных пользователей'
            : 'Для Экспертов'}
        </Typography>
        <ContentDivider />
        <section className={classes.formWrap}>
          <form onSubmit={handleSubmit}>
            {role === roles.client.id ? (
              <div>
                <FormControl className={classes.formControl}>
                  <Field
                    name="phone"
                    component={TextFieldRedux}
                    placeholder="Мобильный телефон"
                    label="Введите номер сотового телефона"
                    required
                    validate={[required]}
                    className={classes.field}
                  />
                </FormControl>
              </div>
            ) : (
              <div>
                <FormControl className={classes.formControl}>
                  <Field
                    name="email"
                    component={TextFieldRedux}
                    placeholder="Электронная почта"
                    label="Введите электронную почту"
                    required
                    validate={[required, email]}
                    className={classes.field}
                  />
                </FormControl>
              </div>
            )}
            {/* <div>
              <FormControl className={classes.formControl}>
                <Field
                  name="password"
                  component={TextFieldRedux}
                  type={showPassword ? "text" : "password"}
                  label={role === roles.client.id ? "Пароль из смс" : "Пароль"}
                  placeholder={
                    role === roles.client.id
                      ? "Вам отправлено смс  на номер"
                      : "Вам на почту отправлен пароль"
                  }
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="Toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  required
                  validate={required}
                  className={classes.field}
                />
              </FormControl>
            </div> */}
            {role === roles.client.id && (
              <div className={classes.optArea}>
                <p>
                  Еще не зарегистрированны?{' '}
                  <a
                    href={
                      link.auth.register +
                      (role === roles.client.id
                        ? `/${roles.client.name}`
                        : `/${roles.expert.name}`)
                    }
                  >
                    Создать аккаунт
                  </a>
                </p>
                {/* <FormControlLabel
                className={classes.label}
                control={<Field name="checkbox" component={CheckboxRedux} />}
                label="Запомнить меня"
              />
              <Button
                size="small"
                component={LinkBtn}
                to={link.auth.resetPassword}
                className={classes.buttonLink}
              >
                Отправить новый пароль
              </Button> */}
              </div>
            )}
            {error && <FormErrorSnackbarContent message={error} />}
            <div className={classes.btnArea}>
              <Button
                variant="contained"
                color="primary"
                size="large"
                type="submit"
              >
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

LoginForm.propTypes = {
  classes: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  pristine: PropTypes.bool.isRequired,
  submitting: PropTypes.bool.isRequired,
  deco: PropTypes.bool.isRequired,
  role: PropTypes.bool.isRequired,
};

const LoginFormReduxed = reduxForm({
  form: 'loginForm',
  enableReinitialize: true,
})(LoginForm);

const FormInit = connect((state) => ({
  force: state,
  initialValues: state.login.usersLogin,
  deco: state.ui.decoration,
}))(LoginFormReduxed);

export default withStyles(styles)(FormInit);
