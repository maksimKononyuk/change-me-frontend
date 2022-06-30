import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Avatar, Typography, Divider } from '@material-ui/core';
import { useDropzone } from 'react-dropzone';
import { AddCircleOutline } from '@material-ui/icons';
import styles from './profile-jss';

function ChangeAvatar(props) {
  const onDrop = useCallback((acceptedFiles) => {
    // Do something with the files
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
  });

  const [files] = useState([]);
  const { classes } = props;
  return (
    <div>
      <Typography variant="h4">Аватар</Typography>
      <Paper className={classes.rootDetail} elevation={0}>
        <Grid container className={classes.root} spacing={3}>
          <Grid item md={4}>
            {/* <div> */}
            <h3 style={{ fontSize: '24px' }}>
              Другие пользователи запомнят вас по аватару
            </h3>
            <Divider className={classes.divider2} />

            <div {...getRootProps()}>
              <input {...getInputProps()} />
              <Avatar color="rgba(21, 101, 192, 1)" className={classes.add}>
                <AddCircleOutline className={classes.icon} />
              </Avatar>
            </div>
            <Divider className={classes.divider} />

            {/* </div> */}
          </Grid>
        </Grid>
        <Divider />
        <Divider className={classes.divider} />
        <Grid container>
          <Grid item>
            <h3>Чтобы добавить (изменить) аватар</h3>
            <p>Нажмите +</p>
          </Grid>
          <Grid item>
            <div {...getRootProps()}>
              <input {...getInputProps()} />
              <AddCircleOutline className={classes.smallIcon} />
            </div>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

ChangeAvatar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ChangeAvatar);
