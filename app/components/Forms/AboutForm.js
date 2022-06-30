import React, { Fragment } from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { Button, Paper, Divider } from '@material-ui/core';
const styles = (theme) => ({
  paper: {
    padding: 24,
    backgroundColor: '#424242',
  },
  divider: {
    margin: `${theme.spacing(1.5)}px 0`,
    background: 'none',
  },
});
function AboutForm(props) {
  const { classes } = props;
  return (
    <Paper className={classes.paper}>
      <Typography variant="h5">О себе:</Typography>
      <Divider className={classes.divider} />
      <Grid item md={8}>
        <Typography variant="p">
          Мы работаем более 8 лет, и за это время составили тысячи резюме для
          специалистов из разных областей. Примеры получившихся документов,
          как и отзывы от довольных клиентов, мы всегда с радостью показываем.
        </Typography>
      </Grid>
    </Paper>
  );
}
AboutForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AboutForm);
