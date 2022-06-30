import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ArrowBack from '@material-ui/icons/ArrowBack';
import { Fullscreen } from '@material-ui/icons';
import styles from '../Contact/contact-jss';

const optionsOpt = ['Delete Conversation', 'Option 1', 'Option 2', 'Option 3'];
// import styles from "../Contact/contact-jss";

const ITEM_HEIGHT = 48;

function ChatHeader(props) {
  const [anchorElOpt, setAnchorElOpt] = useState(null);

  const handleClickOpt = (event) => {
    setAnchorElOpt(event.currentTarget);
  };

  const handleCloseOpt = () => {
    setAnchorElOpt(null);
  };

  const handleRemove = (person) => {
    const { remove } = props;
    remove(person);
  };

  const { chatSelected, dataContact, showMobileDetail, hideDetail, classes } =
    props;
  return (
    <AppBar
      position="absolute"
      className={classNames(
        classes.appBar,
        classes.fixHeight,
        classes.appBarShift
      )}
    >
      <div className={classes.cover}>
        {showMobileDetail && (
          <IconButton
            aria-label="open drawer"
            onClick={() => hideDetail()}
            className={classes.navIconHide}
          >
            <ArrowBack />
          </IconButton>
        )}
        {dataContact.length > 0 && (
          <Fragment>
            <Avatar
              alt="avatar"
              src={dataContact[chatSelected].avatar}
              className={classes.avatar}
            />
            <Typography variant="h6" component="h2" color="inherit" noWrap>
              {dataContact[chatSelected].name}
              <Typography
                variant="caption"
                display="block"
                className={classes.status}
                color="inherit"
                noWrap
              >
                <span className={classes.online} />
                &nbsp;Online
              </Typography>
            </Typography>
          </Fragment>
        )}
        <IconButton
          aria-label="FullScreen"
          className={classes.button}
          onClick={() => {}}
        >
          <Fullscreen color="inherit" className={classes.icon} />
          {/* <FullScreen color="inherit" /> */}
        </IconButton>
      </div>
    </AppBar>
  );
}

ChatHeader.propTypes = {
  classes: PropTypes.object.isRequired,
  dataContact: PropTypes.array.isRequired,
  showMobileDetail: PropTypes.bool.isRequired,
  hideDetail: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired,
  chatSelected: PropTypes.number.isRequired,
};

export default withStyles(styles)(ChatHeader);
