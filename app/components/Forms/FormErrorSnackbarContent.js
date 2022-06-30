import {
  Button,
  IconButton,
  SnackbarContent,
  withStyles,
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import messageStyles from 'dan-styles/Messages.scss';

const styles = (theme) => ({
  snackbar: {
    // margin: theme.spacing(1),
  },
  divider: {
    margin: `${theme.spacing(3)}px 0`,
  },
  margin: {
    margin: theme.spacing(1),
  },
});

const closeAction = (
  <IconButton color="default" size="small">
    <CloseIcon />
  </IconButton>
);

function FormErrorSnackbarContent(props) {
  const { message, classes } = props;
  return (
    <SnackbarContent
      className={classNames(classes.snackbar, messageStyles.bgError)}
      message={message}
      //   action={closeAction}
    />
  );
}

FormErrorSnackbarContent.propTypes = {
  message: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FormErrorSnackbarContent);
