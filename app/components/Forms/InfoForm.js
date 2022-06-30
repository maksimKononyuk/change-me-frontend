import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm, SubmissionError } from 'redux-form';
import { bindActionCreators } from 'redux';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import {
  InputLabel,
  MenuItem,
  Select,
  FormControl,
  withStyles,
  Button,
} from '@material-ui/core';
import roles from 'dan-api/ui/roles';
import {
  initAction,
  clearAction,
  loadAction,
} from 'dan-redux/actions/reduxFormActions';
import { updateUserAction } from 'dan-redux/actions/authActions';

import { connect } from 'react-redux';
import {
  CheckboxRedux,
  SelectRedux,
  TextFieldRedux,
  SwitchRedux,
} from 'dan-components/Forms/ReduxFormMUI';

import { nextProfileEditStep } from 'dan-redux/actions/profileEditActions';
// import { TextFieldRedux, CheckboxRedux } from './ReduxFormMUI';

import useAuth from '../../hooks/useAuth';
import axios from '../../utils/axios';

const required = (value) => (value == null ? 'Required' : undefined);
// TODO: Валидация
const email = (value) =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Invalid email'
    : undefined;

const styles = (theme) => ({
  root: {
    flexGrow: 1,
    padding: 30,
  },
  field: {
    width: '100%',
    marginBottom: 20,
  },
  fieldBasic: {
    width: '100%',
    marginBottom: 20,
    marginTop: 10,
  },
  inlineWrap: {
    display: 'flex',
    flexDirection: 'row',
  },
  buttonInit: {
    margin: theme.spacing(4),
    textAlign: 'center',
  },
});

function InfoForm(props) {
  const { roleId, user } = useAuth();

  const { classes, handleSubmit, init } = props;

  useEffect(() => {
    init({
      ...user,
      city: user?.city?.name,
      startEmail: user.email,
      startPhone: user.phone,
    });
  }, [init]);

  return (
    <Fragment>
      <Typography variant="h6" gutterBottom>
        {roleId === roles.client.id ? 'О себе' : 'Персональные данные'}
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <Field
              // id="first_name"
              name="first_name"
              label="Имя"
              validate={required}
              required
              className={classes.field}
              component={TextFieldRedux}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Field
              name="last_name"
              label="Фамилия"
              validate={required}
              required
              className={classes.field}
              component={TextFieldRedux}
            />
          </Grid>
          <Grid item xs={12}>
            {roleId === roles.client.id ? (
              <Field
                name="biography"
                label="Коротко о себе...  Например: Мать двоих детей, занимаюсь воспитанием"
                className={classes.field}
                component={TextFieldRedux}
              />
            ) : (
              <Field
                name="email"
                component={TextFieldRedux}
                label="E-mail"
                required
                validate={[required, email]}
                className={classes.field}
                fullWidth
              />
            )}
          </Grid>
          {roleId !== roles.client.id && (
            <Grid item xs={12}>
              <Field
                name="mailing_address"
                component={TextFieldRedux}
                label="Адрес фактического местанахождения"
                className={classes.field}
                fullWidth
              />
            </Grid>
          )}
          <Grid item xs={12} sm={6}>
            {roleId === roles.client.id ? (
              // TODO: Узнать про то, как вписывать город
              <Field
                name="city"
                component={TextFieldRedux}
                label="Город"
                className={classes.field}
                fullWidth
              />
            ) : (
              <Field
                name="birthdate"
                component={TextFieldRedux}
                label="Дата рождения"
                className={classes.field}
                fullWidth
                required
              />
            )}
          </Grid>
          <Grid item xs={12} sm={6}>
            <Field
              name="phone"
              component={TextFieldRedux}
              label="Мобильный телефон"
              className={classes.field}
              fullWidth
              required
            />
          </Grid>
          {roleId === roles.client.id && (
            <Grid item xs={12} sm={6}>
              <Field
                name="birthdate"
                component={TextFieldRedux}
                label="Дата рождения"
                className={classes.field}
                fullWidth
                required
              />
            </Grid>
          )}
          {roleId === roles.client.id && (
            <Grid item xs={12} sm={6}>
              <Field
                name="email"
                component={TextFieldRedux}
                label="E-mail"
                required
                validate={[required, email]}
                className={classes.field}
                fullWidth
              />
            </Grid>
          )}
          {roleId !== roles.client.id && (
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel>Форма предпринимательсва</InputLabel>
                <Select
                  label="Форма предпринимательсва"
                  labelId="entrepreneurialForm"
                  id="entrepreneurialForm"
                  onChange={() => {}}
                  fullWidth
                >
                  <MenuItem>Opt 1</MenuItem>
                  <MenuItem>Opt 2</MenuItem>
                  <MenuItem>Opt 3</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          )}
          <Grid item xs={12}>
            <FormControlLabel
              // className={classes.label}
              control={
                <Field name="rememberMe" required component={CheckboxRedux} />
              }
              label="Согласен с обработкой персональных данных"
            />
            {/* <FormControlLabel
            control={<Checkbox color="secondary" name="agree" value="yes" />}
            label="Согласен с обработкой персональных данных"
          /> */}
          </Grid>
        </Grid>
      </form>
    </Fragment>
  );
}
InfoForm.propTypes = {
  init: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  init: bindActionCreators(initAction, dispatch),
  clear: () => dispatch(clearAction),
});

const InfoFormReduxed = reduxForm({
  form: 'profileEditForm',
  enableReinitialize: true,
  onSubmit: async (values) => {
    // TODO: Сохранение данных пользователя

    try {
      const {
        id,
        first_name,
        last_name,
        biography,
        birthdate,
        phone,
        startPhone,
        email,
        startEmail,
      } = values;
      const response = await axios.put(`/users/${id}`, {
        first_name,
        last_name,
        biography,
        birthdate,
        ...(phone !== startPhone && { phone }),
        ...(email !== startEmail && { email }),
      });

      return response.data.user;
    } catch (exc) {
      console.log(exc);
      throw new SubmissionError({ ...exc.errors, _error: 'Ошибка заполнения' });
    }
  },
  onSubmitSuccess: (result, dispatch) => {
    // console.log({ result });
    dispatch(updateUserAction(result));
    dispatch(nextProfileEditStep);
  },
})(InfoForm);

const FormInit = connect(
  (state) => ({
    initialValues: state.initval.formValues,
  }),
  mapDispatchToProps
)(InfoFormReduxed);

export default withStyles(styles)(FormInit);
