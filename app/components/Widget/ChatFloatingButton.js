import React from 'react';
import ChatIcon from '@material-ui/icons/Chat';
import { IconButton } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
  root: {
    position: 'fixed',
    bottom: '62px',
    right: '20px',
    zIndex: '20',
    borderRadius: '50%',
    backgroundColor: '#fff',
    width: '120px',
    height: '120px',
    display: 'flex',
    alignItems: 'center',
    justifyItems: 'center',
    justifyContent: 'center',
    boxShadow: '0px 0px 40px 0px #03A9F4',
    transition: 'all 0.5s ease',
    [theme.breakpoints.down('sm')]: {
      width: '80px',
      height: '80px',
    },
  },
  button: {},
});

function ChatFloatingButton(props) {
  const { classes } = props;
  return (
    <IconButton
      className={classes.root}
      style={{
        backgroundColor: '#fff',
      }}
    >
      <ChatIcon
        color="primary"
        style={{
          width: '50%',
          height: '50%',
        }}
      />
    </IconButton>
  );
}

export default withStyles(styles)(ChatFloatingButton);
