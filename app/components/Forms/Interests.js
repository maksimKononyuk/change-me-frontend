import React, { Fragment } from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
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
function Interests(props) {
  const { classes } = props;
  return (
    <Paper className={classes.paper}>
      <Typography variant="h5">Выберите интересные темы</Typography>
      <Divider className={classes.divider} />
      <Divider className={classes.divider} />
      <Divider className={classes.divider} />
      <Grid container spacing={3}>
        <Grid item>
          <Button variant="contained" color="primary" size="large">
            РАЗВЛЕЧЕНИЯ
          </Button>
        </Grid>
        <Grid item>
          <Button variant="contained" color="primary" size="large">
            РАЗВЛЕЧЕНИЯ
          </Button>
        </Grid>
        <Grid item>
          <Button variant="contained" color="white" size="large">
            РАЗВЛЕЧЕНИЯ
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
}
Interests.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Interests);
