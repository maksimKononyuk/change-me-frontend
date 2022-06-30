import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import brand from 'dan-api/dummy/brand';
import { PapperBlock } from 'dan-components';
import {
  Button,
  Divider,
  Grid,
  Typography,
  withStyles,
} from '@material-ui/core';
const styles = (theme) => ({
  root: {
    color: '#fff',
  },
  details: {
    marginTop: '10vh',
    width: '40%',
    minWidth: '300px',
  },
  divider: {
    margin: `${theme.spacing(2)}px 0`,
    background: 'none',
  },
});

function GreetingPage(props) {
  const title = brand.name + ' - Welcome';
  const description = brand.desc;
  const { classes, role, loggedIn } = props;
  console.log(loggedIn);
  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justifyContent="center"
      className={classes.root}
    >
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
      </Helmet>
      {role === 'user' ? (
        <>
          <Typography variant="h3">
            Добро пожаловать на платформу change-me.ru
          </Typography>
          <div className={classes.details}>
            <Typography variant="h6">
              Мы хотим помочь расскрыть ваши потребности
            </Typography>
            <Typography variant="h6">
              и просим заполненить персональную информацию
            </Typography>
            <Divider className={classes.divider} />
            <Divider />
            <Divider className={classes.divider} />

            <Grid container spacing={3} justifyContent="center">
              <Grid item>
                <Button
                  variant="contained"
                  color="primary"
                  size="small"
                  className={classes.button}
                >
                  заполнить
                </Button>
              </Grid>
              <Grid item>
                <Button variant="text" size="small" className={classes.button}>
                  пРОПУСТИТЬ
                </Button>
              </Grid>
            </Grid>
          </div>
        </>
      ) : loggedIn ? (
        <>
          <Typography variant="h3">Добрый день Антон)</Typography>
          <Divider className={classes.divider} />

          <Typography variant="h3">С возвращением!</Typography>
        </>
      ) : (
        <>
          <Typography variant="h3">Добрый день )</Typography>
          <Divider className={classes.divider} />

          <Typography variant="h3">
            Добро пожаловать на платформу change-me.ru
          </Typography>
        </>
      )}
    </Grid>
  );
}
GreetingPage.propTypes = {
  classes: PropTypes.object.isRequired,
  role: PropTypes.string.isRequired,
  loggedIn: PropTypes.bool,
};
GreetingPage.defaultProps = {
  loggedIn: false,
};
export default withStyles(styles)(GreetingPage);
