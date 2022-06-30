import React, { useState, Fragment, useEffect } from 'react';
import { clearFields, submit } from 'redux-form';
import { useDispatch, useSelector } from 'react-redux';
import link from 'dan-api/ui/link';

import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import withStyles from '@material-ui/core/styles/withStyles';
import CssBaseline from '@material-ui/core/CssBaseline';
import withWidth, { isWidthDown } from '@material-ui/core/withWidth';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Check } from '@material-ui/icons';
import roles from 'dan-api/ui/roles';
import {
  loadProfileEditAction,
  nextProfileEditStep,
  prevProfileEditStep,
} from 'dan-redux/actions/profileEditActions';
import InfoForm from '../../components/Forms/InfoForm';
import Requisites from '../../components/Forms/Requisites';
import Interests from '../../components/Forms/Interests';
import AboutForm from '../../components/Forms/AboutForm';
import SideReview from '../../components/Forms/SideReview';
import useAuth from '../../hooks/useAuth';

const styles = (theme) => ({
  appBar: {
    position: 'relative',
  },
  layout: {
    width: 'auto',
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(3),
  },
  stepper: {
    padding: `${theme.spacing(3)}px 0 ${theme.spacing(5)}px`,
  },
  finishMessage: {
    textAlign: 'center',
    maxWidth: 600,
    margin: '0 auto',
    '& h4': {
      color: theme.palette.primary.main,
      '& span': {
        textAlign: 'center',
        display: 'block',
        '& i': {
          fontSize: 120,
        },
      },
    },
  },
  buttons: {
    display: 'flex',
    justifyContent: 'center',
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
});

const steps = ['О себе', 'Мои  интересы', 'Готово'];
const expertSteps = ['Профиль', 'Реквизиты', 'О Себе'];
function getStepContent({ step, role }) {
  switch (step) {
    case 0:
      return <InfoForm />;
    case 1:
      return role === roles.client.id ? <Interests /> : <Requisites />;
    case 2:
      return role === roles.client.id ? (
        <Paper style={{ height: '40vh', color: '#06D049' }}>
          <Check style={{ height: '30vh', width: '30vh' }} />
        </Paper>
      ) : (
        <AboutForm />
      );
    default:
      throw new Error('Unknown step');
  }
}

function EditFillProfile(props) {
  // const [activeStep, setActiveStep] = useState(0);

  const { currentStep, isLoading } = useSelector((state) => state.profileEdit);
  const dispatch = useDispatch();
  const { roleId, user } = useAuth();

  useEffect(() => {
    // TODO: Загрузка данных для редактирования профиля
    dispatch(loadProfileEditAction({ interests: [], chosenInterests: [] }));
  }, [dispatch, loadProfileEditAction]);

  const handleFirstStep = async (values) => {
    console.log(values);
  };

  const handleNext = () => {
    if (currentStep === 0) {
      dispatch(submit('profileEditForm'));
      return;
    }
    dispatch(nextProfileEditStep);
  };

  const handleBack = () => {
    dispatch(prevProfileEditStep);
  };

  const { classes, width } = props;

  return (
    <Fragment>
      <CssBaseline />
      <main className={classes.layout}>
        <Typography variant="h4">Заполните, пожалуйста, данные</Typography>

        <Paper className={classes.paper}>
          <Fragment>
            <Grid container spacing={3}>
              <Grid item xs={12} md={7}>
                <Stepper
                  activeStep={currentStep}
                  className={classes.stepper}
                  alternativeLabel={isWidthDown('sm', width)}
                >
                  {roleId === roles.client.id
                    ? steps.map((label) => (
                      <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                      </Step>
                    ))
                    : expertSteps.map((label) => (
                      <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                      </Step>
                    ))}
                </Stepper>
                {
                  // TODO: Добавить отображение загрузки
                  isLoading ? (
                    <p>LOAD</p>
                  ) : (
                    getStepContent({
                      step: currentStep,
                      role: roleId,
                      submitFirstStep: handleFirstStep,
                    })
                  )
                }
              </Grid>
              <Grid item xs={12} md={5}>
                <SideReview role={roleId} />
              </Grid>
            </Grid>
            <div className={classes.buttons}>
              {currentStep !== 0 && (
                <Button onClick={handleBack} className={classes.button}>
                  назад
                </Button>
              )}
              <Button
                variant="contained"
                color="primary"
                onClick={() => {
                  currentStep === steps.length - 1
                    ? (window.location.href = link.profile.root)
                    : handleNext();
                }}
                className={classes.button}
                size="large"
              >
                {currentStep === steps.length - 1 ? 'ГОТОВО' : 'Далее'}
              </Button>
              {currentStep === 0 && (
                <Button onClick={() => {}} className={classes.button}>
                  пРОПУСТИТЬ
                </Button>
              )}
            </div>
          </Fragment>
        </Paper>
      </main>
    </Fragment>
  );
}

EditFillProfile.propTypes = {
  classes: PropTypes.object.isRequired,
  width: PropTypes.string.isRequired,
};

export default withWidth()(withStyles(styles)(EditFillProfile));
