import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import { NavLink } from 'react-router-dom';
import Toolbar from '@material-ui/core/Toolbar';
import SearchIcon from '@material-ui/icons/Search';
import classNames from 'classnames';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import logo from 'dan-images/logo.svg';
import brand from 'dan-api/dummy/brand';
import dummy from 'dan-api/dummy/dummyContents';

import { Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import styles from './footer-jss';
import SearchUi from '../Search/SearchUi';
import { changeThemeAction } from '../../redux/actions/uiActions';

const elem = document.documentElement;

function FooterLink({ name, linkTo }) {
  return (
    <NavLink
      to={linkTo}
      style={{
        textDecoration: 'none',
        color: '#fff',
        fontSize: '12px',
        fontWeight: 600,
      }}
    >
      {name}
    </NavLink>
  );
}

function Footer(props) {
  const [fullScreen, setFullScreen] = useState(false);
  const [status, setStatus] = useState(dummy.user.status);
  const [anchorEl, setAnchorEl] = useState(null);
  const [fixed, setFixed] = useState(false);

  // Initial menu ui
  let flagFixedMenu = false;

  const handleScroll = () => {
    const doc = document.documentElement;
    const scroll = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
    const newFlagFixedMenu = scroll > 64;
    if (flagFixedMenu !== newFlagFixedMenu) {
      setFixed(newFlagFixedMenu);
      flagFixedMenu = newFlagFixedMenu;
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const openFullScreen = () => {
    setFullScreen(true);
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) {
      /* Firefox */
      elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) {
      /* Chrome, Safari & Opera */
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) {
      /* IE/Edge */
      elem.msRequestFullscreen();
    }
  };

  const closeFullScreen = () => {
    setFullScreen(false);
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }
  };

  const turnMode = (mode) => {
    if (mode === 'light') {
      props.changeMode('dark');
    } else {
      props.changeMode('light');
    }
  };

  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleChangeStatus = (st) => {
    setStatus(st);
    handleClose();
  };

  const {
    classes,
    type,
    dataMenu,
    history,
    openGuide,
    mode,
    toggleDrawerOpen,
    openMobileNav,
    loadTransition,
    isLogin,
    logoLink,
  } = props;
  return (
    <Grid container justifyContent="space-between" className={classes.appBar}>
      <Grid item xs="auto">
        <NavLink
          to={logoLink}
          /* className={classes.brand} */ style={{
            textDecoration: 'none',
            color: '#fff',
            fontSize: '12px',
            fontWeight: 600,
          }}
        >
          <img
            src={logo}
            alt={brand.name}
            width="25px"
            height="25px"
            style={{ marginRight: '6px' }}
          />
          ОНЛАЙН ПЛАТФОРМА Change-me.ru
        </NavLink>
      </Grid>
      <Grid container item xs justifyContent="flex-end" spacing={2}>
        <Grid item>
          {/* TODO: Добавить навигацию в футер */}
          <FooterLink name="ГЛАВНАЯ" linkTo="" />
        </Grid>
        <Grid item>
          <FooterLink name="ЭКСПЕРТЫ" linkTo="" />
        </Grid>
        <Grid item>
          <FooterLink name="ГАЛЕРЕЯ" linkTo="" />
        </Grid>
        <Grid item>
          <FooterLink name="МЕССЕНДЖЕР" linkTo="" />
        </Grid>
        <Grid item>
          <FooterLink name="ВИДЕОЧАТ" linkTo="" />
        </Grid>
      </Grid>
    </Grid>
  );
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
  type: PropTypes.string.isRequired,
  dataMenu: PropTypes.array.isRequired,
  openMobileNav: PropTypes.bool.isRequired,
  mode: PropTypes.string.isRequired,
  changeMode: PropTypes.func.isRequired,
  openGuide: PropTypes.func.isRequired,
  toggleDrawerOpen: PropTypes.func.isRequired,
  loadTransition: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
  logoLink: PropTypes.string,
  isLogin: PropTypes.bool,
};

Footer.defaultProps = {
  isLogin: true,
  logoLink: '/',
};

export default withStyles(styles)(Footer);
