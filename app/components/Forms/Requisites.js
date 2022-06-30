import React, { Fragment } from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import TextField from '@material-ui/core/TextField';
const styles = (theme) => ({
  divider: {
    margin: `${theme.spacing(1.5)}px 0`,
    background: 'none',
  },
});
function Requisites(props) {
  const { classes } = props;
  return (
    <Fragment>
      <Typography variant="h6" gutterBottom>
        Реквизиты ООО
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="orgName"
            name="orgName"
            label="Полное наименование организации"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="legAddress"
            name="legAddress"
            label="Юридический адрес"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="address"
            name="address"
            label="Почтовый адрес"
            fullWidth
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField required id="inn" name="inn" label="ИНН" fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField required id="kpp" name="kpp" label="КПП" fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="checkingAddress"
            name="checkingAddress"
            label="Расчетный счет"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField required id="bik" name="bik" label="БИК" fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField required id="ks" name="ks" label="К/С" fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="director"
            name="director"
            label="Директор"
            fullWidth
          />
        </Grid>
      </Grid>
    </Fragment>
  );
}
Requisites.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Requisites);
