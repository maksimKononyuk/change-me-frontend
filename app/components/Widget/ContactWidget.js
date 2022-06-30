/* eslint-disable react/jsx-wrap-multilines */
import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Hidden from '@material-ui/core/Hidden';
import Badge from '@material-ui/core/Badge';
import Paper from '@material-ui/core/Paper';
import PhoneIcon from '@material-ui/icons/Phone';
import Chat from '@material-ui/icons/Chat';
import Videocam from '@material-ui/icons/Videocam';
import ThumbDown from '@material-ui/icons/ThumbDown';
import ThumbUp from '@material-ui/icons/ThumbUp';
import ToggleStar from '@material-ui/icons/Star';
import ToggleStarBorder from '@material-ui/icons/StarBorder';
import NotificationsActive from '@material-ui/icons/NotificationsActive';
import Info from '@material-ui/icons/Info';
import Warning from '@material-ui/icons/Warning';
import Check from '@material-ui/icons/CheckCircle';
import Error from '@material-ui/icons/RemoveCircle';
import AccountBox from '@material-ui/icons/AccountBox';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import PlaylistAddCheck from '@material-ui/icons/PlaylistAddCheck';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';
import Tooltip from '@material-ui/core/Tooltip';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import messageStyles from 'dan-styles/Messages.scss';
// import dataContact from "../../containers/SampleApps/Contact/api/contactData";
import { grey, orange } from '@material-ui/core/colors';

// TODO: Убрать mock-data
import avatarApi from 'dan-api/images/avatars';
import { Chip, Divider, Grid } from '@material-ui/core';
import Rating from '../Rating/Rating';
import styles from './widget-jss';
const dataContact = [
  {
    id: '1',
    avatar: avatarApi[9],
    name: 'James Doe',
    title: 'Эксперт',
    phone: '+6281234567890',
    secondaryPhone: '+6280987654321',
    personalEmail: 'johndoe@mail.com',
    companyEmail: 'johndoe@company.com',
    address: 'Ipsum Street no.77 Block A/5A, New York',
    website: 'http://doeclans.net',
    favorited: false,
  },
  {
    id: '2',
    avatar: avatarApi[8],
    name: 'Jim Doe',
    title: 'Эксперт',
    phone: '+657890321145',
    secondaryPhone: '',
    personalEmail: 'jimdoe@mail.com',
    companyEmail: 'jimdoe@company.com',
    address: 'Lorem Street no.76 Block B/8B, Brooklyn',
    website: 'http://doejim.com',
    favorited: true,
  },
  {
    id: '3',
    avatar: avatarApi[2],
    name: 'Jane Doe',
    title: 'Эксперт',
    phone: '+45353695',
    secondaryPhone: '+678910111213',
    personalEmail: 'janedoe@mail.com',
    companyEmail: 'janedoe@company.com',
    address: 'Dolor Street no.76 Block B/8B, Tokyo',
    website: 'http://janedoe.com',
    favorited: false,
  },
  {
    id: '4',
    avatar: avatarApi[10],
    name: 'Jinx Doe',
    title: 'Эксперт',
    phone: '+678543210012',
    secondaryPhone: '',
    personalEmail: 'jinx@mail.com',
    companyEmail: '',
    address: 'Paskal Street no.101 Block B/10B, Samarinda',
    website: '',
    favorited: 'false',
  },
  {
    id: '5',
    avatar: avatarApi[4],
    name: 'Jihan Doe',
    title: 'Эксперт',
    phone: '+45353695',
    secondaryPhone: '+56743210468',
    personalEmail: 'jihan@mail.com',
    companyEmail: 'jihan@company.com',
    address: 'Sit amet Street no.76 Block B/8B, New York',
    website: '',
    favorited: true,
  },
  {
    id: '6',
    avatar: avatarApi[7],
    name: 'Johny Doe',
    title: 'Эксперт',
    phone: '+2234561234',
    secondaryPhone: '+6742234235666',
    personalEmail: 'johny_doe@mail.com',
    companyEmail: '',
    address: 'Vivacus Street no.2 Block C/10A, Paris',
    website: '',
    favorited: true,
  },
];

/* Tab Container */
function TabContainer(props) {
  const { children } = props;
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};
/* END Tab Container */

/* Contact List */
function ContactList(props) {
  const getItem = (dataArray) =>
    // eslint-disable-next-line implicit-arrow-linebreak
    dataArray.map((data) => (
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignContent="center"
        alignItems="center"
        style={{
          marginLeft: '24px',
          marginRight: '29px',
          marginTop: '6px',
          marginBottom: '6px',
        }}
      >
        <Grid container item xs={4} alignContent="center" alignItems="center">
          <Avatar
            alt={data.name}
            src={data.avatar}
            className={props.classes.avatar}
          />
          <ListItemText primary={data.name} secondary={data.title} />
        </Grid>

        <Grid container item xs direction="row" justifyContent="flex-end">
          <Grid container item xs={3} spacing={1} justifyContent="flex-end">
            <Grid item>
              <Tooltip title="Chat">
                <IconButton
                  className={props.classes.blueText}
                  aria-label="Chat"
                >
                  <Chat />
                </IconButton>
              </Tooltip>
            </Grid>
            <Grid item>
              <Tooltip title="Call">
                <IconButton
                  className={props.classes.blueText}
                  aria-label="Email"
                >
                  <Videocam />
                </IconButton>
              </Tooltip>
            </Grid>
          </Grid>

          <Grid container item xs={6} spacing={1} justifyContent="center">
            {/* Рейтинг */}
            {[0, 1, 2, 3].map((star) => (
              <Grid item>
                <ToggleStar style={{ color: orange[500] }} />
              </Grid>
            ))}
            <Grid item>
              <ToggleStarBorder style={{ color: grey[300] }} />
            </Grid>
          </Grid>

          <Grid container item xs={3} spacing={1}>
            <Grid item>
              <Tooltip title="Like">
                <IconButton
                  size="small"
                  className={props.classes.greenText}
                  aria-label="Telp"
                >
                  <ThumbUp />
                </IconButton>
              </Tooltip>
            </Grid>
            <Grid item>
              <Typography variant="caption">11</Typography>
            </Grid>
            <Grid item>
              <Tooltip title="Dislike">
                <IconButton
                  size="small"
                  className={props.classes.greenText}
                  aria-label="Telp"
                >
                  <ThumbDown />
                </IconButton>
              </Tooltip>
            </Grid>
            <Grid item>
              <Typography variant="caption">1</Typography>
            </Grid>
          </Grid>
        </Grid>

        {/* <Hidden xsDown> */}
        {/* <ListItemSecondaryAction> */}

        {/* Рейтинг */}
        {/* [0, 1, 2, 3].map((star) => (
            <Grid item>
              <ToggleStar style={{ color: orange[500] }} />
            </Grid>
          )) */}
        {/* <Grid item>
            <ToggleStarBorder style={{ color: grey[300] }} />
          </Grid> */}

        {/* </ListItemSecondaryAction> */}
        {/* </Hidden> */}
        <Hidden smUp>
          <ListItemSecondaryAction>
            <IconButton
              aria-label="More"
              aria-haspopup="true"
              onClick={props.openMenu}
            >
              <MoreVertIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </Hidden>
      </Grid>
      // <ListItem button key={data.id}>
      //   <Avatar
      //     alt={data.name}
      //     src={data.avatar}
      //     className={props.classes.avatar}
      //   />
      //   <ListItemText primary={data.name} secondary={data.title} />

      //   <Hidden xsDown>
      //     {/* <ListItemSecondaryAction> */}
      //     <Tooltip title="Chat">
      //       <IconButton className={props.classes.blueText} aria-label="Chat">
      //         <Chat />
      //       </IconButton>
      //     </Tooltip>
      //     <Tooltip title="Call">
      //       <IconButton className={props.classes.blueText} aria-label="Email">
      //         <Videocam />
      //       </IconButton>
      //     </Tooltip>
      //     {/* Рейтинг */}
      //     {[0, 1, 2, 3].map((star) => (
      //       <ToggleStar style={{ color: orange[500] }} />
      //     ))}
      //     <ToggleStarBorder style={{ color: grey[300] }} />
      //     <Tooltip title="Like">
      //       <IconButton
      //         size="small"
      //         className={props.classes.greenText}
      //         aria-label="Telp"
      //       >
      //         <ThumbUp />
      //       </IconButton>
      //     </Tooltip>
      //     {/* <Typography>11</Typography> */}
      //     <Tooltip title="Dislike">
      //       <IconButton
      //         size="small"
      //         className={props.classes.greenText}
      //         aria-label="Telp"
      //       >
      //         <ThumbDown />
      //       </IconButton>
      //       <ListItemText primary={`Line item ${11}`} />
      //     </Tooltip>
      //     {/* </ListItemSecondaryAction> */}
      //   </Hidden>
      //   <Hidden smUp>
      //     <ListItemSecondaryAction>
      //       <IconButton
      //         aria-label="More"
      //         aria-haspopup="true"
      //         onClick={props.openMenu}
      //       >
      //         <MoreVertIcon />
      //       </IconButton>
      //     </ListItemSecondaryAction>
      //   </Hidden>
      // </ListItem>
    ));
  return <List>{getItem(dataContact)}</List>;
}

ContactList.propTypes = {
  classes: PropTypes.object.isRequired,
  openMenu: PropTypes.func.isRequired,
};

const ContactListStyled = withStyles(styles)(ContactList);
/* END Contact List */

/* Conversation List */
function MessagesList(props) {
  const { classes } = props;
  return (
    <List>
      <ListItem button component={NavLink} to="/app/pages/chat">
        <Avatar
          alt={dataContact[2].name}
          src={dataContact[2].avatar}
          className={classes.avatar}
        />
        <ListItemText
          primary={dataContact[2].name}
          className={classes.messages}
          secondary="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
        <ListItemSecondaryAction>
          <Typography variant="caption">10:42 PM</Typography>
        </ListItemSecondaryAction>
      </ListItem>
      <ListItem button component={NavLink} to="/app/pages/chat">
        <Avatar
          alt={dataContact[5].name}
          src={dataContact[5].avatar}
          className={classes.avatar}
        />
        <ListItemText
          primary={dataContact[5].name}
          className={classes.messages}
          secondary="Sed a ipsum euismod, eleifend turpis sed."
        />
        <ListItemSecondaryAction>
          <Typography variant="caption">11:17 AM</Typography>
        </ListItemSecondaryAction>
      </ListItem>
      <ListItem button component={NavLink} to="/app/pages/chat">
        <Avatar
          alt={dataContact[1].name}
          src={dataContact[1].avatar}
          className={classes.avatar}
        />
        <ListItemText
          primary={dataContact[1].name}
          className={classes.messages}
          secondary="Praesent viverra est et risus fringilla bibendum."
        />
        <ListItemSecondaryAction>
          <Typography variant="caption">11 Oct</Typography>
        </ListItemSecondaryAction>
      </ListItem>
      <ListItem button component={NavLink} to="/app/pages/chat">
        <Avatar
          alt={dataContact[0].name}
          src={dataContact[0].avatar}
          className={classes.avatar}
        />
        <ListItemText
          primary={dataContact[0].name}
          className={classes.messages}
          secondary="Praesent at ex non leo iaculis dignissim. Proin nec venenatis nulla, nec vulputate ipsum. Curabitur eu dignissim nibh, eget condimentum massa."
        />
        <ListItemSecondaryAction>
          <Typography variant="caption">12 Oct</Typography>
        </ListItemSecondaryAction>
      </ListItem>
    </List>
  );
}

MessagesList.propTypes = {
  classes: PropTypes.object.isRequired,
};

const MessagesListStyled = withStyles(styles)(MessagesList);
/* END Conversation List */

/* Email List */
function NotifList(props) {
  const { classes, openMenu } = props;
  return (
    <List>
      <ListItem button component={NavLink} to="/app/pages/chat">
        <Avatar
          alt={dataContact[2].name}
          src={dataContact[2].avatar}
          className={classes.avatar}
        />
        <ListItemText
          primary="Через 30 минут начнется Семинар Павла Дурова"
          secondary="12 Окт 2021 15:00"
        />
        <Hidden xsDown>
          <ListItemSecondaryAction>
            <Button variant="outlined" size="small" className={classes.button}>
              Прочитать
            </Button>
          </ListItemSecondaryAction>
        </Hidden>
        <Hidden smUp>
          <ListItemSecondaryAction>
            <IconButton
              aria-label="More"
              aria-haspopup="true"
              onClick={openMenu}
            >
              <MoreVertIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </Hidden>
      </ListItem>
      <ListItem button component={NavLink} to="/app/pages/chat">
        <Avatar
          alt={dataContact[2].name}
          src={dataContact[2].avatar}
          className={classes.avatar}
        />
        <ListItemText
          primary="Через 30 минут начнется Семинар Павла Дурова"
          secondary="12 Окт 2021 15:00"
        />
        <Hidden xsDown>
          <ListItemSecondaryAction>
            <Button variant="outlined" size="small" className={classes.button}>
              Прочитать
            </Button>
          </ListItemSecondaryAction>
        </Hidden>
        <Hidden smUp>
          <ListItemSecondaryAction>
            <IconButton
              aria-label="More"
              aria-haspopup="true"
              onClick={openMenu}
            >
              <MoreVertIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </Hidden>
      </ListItem>
      <ListItem button component={NavLink} to="/app/pages/chat">
        <Avatar
          alt={dataContact[2].name}
          src={dataContact[2].avatar}
          className={classes.avatar}
        />
        <ListItemText
          primary="Через 30 минут начнется Семинар Павла Дурова"
          secondary="12 Окт 2021 15:00"
        />
        <Hidden xsDown>
          <ListItemSecondaryAction>
            <Button variant="outlined" size="small" className={classes.button}>
              Прочитать
            </Button>
          </ListItemSecondaryAction>
        </Hidden>
        <Hidden smUp>
          <ListItemSecondaryAction>
            <IconButton
              aria-label="More"
              aria-haspopup="true"
              onClick={openMenu}
            >
              <MoreVertIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </Hidden>
      </ListItem>
      <ListItem button component={NavLink} to="/app/pages/chat">
        <Avatar
          alt={dataContact[2].name}
          src={dataContact[2].avatar}
          className={classes.avatar}
        />
        <ListItemText
          primary="Через 30 минут начнется Семинар Павла Дурова"
          secondary="12 Окт 2021 15:00"
        />
        <Hidden xsDown>
          <ListItemSecondaryAction>
            <Button variant="outlined" size="small" className={classes.button}>
              Прочитать
            </Button>
          </ListItemSecondaryAction>
        </Hidden>
        <Hidden smUp>
          <ListItemSecondaryAction>
            <IconButton
              aria-label="More"
              aria-haspopup="true"
              onClick={openMenu}
            >
              <MoreVertIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </Hidden>
      </ListItem>
      <ListItem button component={NavLink} to="/app/pages/chat">
        <Avatar
          alt={dataContact[2].name}
          src={dataContact[2].avatar}
          className={classes.avatar}
        />
        <ListItemText
          primary="Через 30 минут начнется Семинар Павла Дурова"
          secondary="12 Окт 2021 15:00"
        />
        <Hidden xsDown>
          <ListItemSecondaryAction>
            <Button variant="outlined" size="small" className={classes.button}>
              Прочитать
            </Button>
          </ListItemSecondaryAction>
        </Hidden>
        <Hidden smUp>
          <ListItemSecondaryAction>
            <IconButton
              aria-label="More"
              aria-haspopup="true"
              onClick={openMenu}
            >
              <MoreVertIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </Hidden>
      </ListItem>
    </List>
  );
}

NotifList.propTypes = {
  classes: PropTypes.object.isRequired,
  openMenu: PropTypes.func.isRequired,
};

const NotifListStyled = withStyles(styles)(NotifList);
/* END Email List */

function ContactWidget(props) {
  const [value, setValue] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const [anchorElAction, setAnchorElAction] = useState(null);

  const handleChange = (event, val) => {
    setValue(val);
  };

  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleOpenAction = (event) => {
    setAnchorElAction(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setAnchorElAction(null);
  };

  const { classes } = props;
  const open = Boolean(anchorEl);
  const openAct = Boolean(anchorElAction);
  return (
    <Fragment>
      <Menu
        id="long-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Chat className={classes.blueText} />
          </ListItemIcon>
          <ListItemText variant="inset" primary="Chat" />
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Videocam className={classes.pinkText} />
          </ListItemIcon>
          <ListItemText variant="inset" primary="Email" />
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <PhoneIcon className={classes.tealText} />
          </ListItemIcon>
          <ListItemText variant="inset" primary="Call" />
        </MenuItem>
      </Menu>
      <Menu
        id="long-menu-act"
        anchorEl={anchorElAction}
        open={openAct}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Check className={classes.tealText} />
          </ListItemIcon>
          <ListItemText variant="inset" primary="Fix it" />
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <PlaylistAddCheck />
          </ListItemIcon>
          <ListItemText variant="inset" primary="Skip" />
        </MenuItem>
      </Menu>
      <Paper className={classes.rootContact}>
        <AppBar position="static" color="default">
          <Hidden mdUp>
            <Tabs
              value={value}
              onChange={handleChange}
              indicatorColor="primary"
              textColor="primary"
              variant="fullWidth"
            >
              <Tab icon={<AccountBox />} />
              <Tab icon={<Chat />} />
              <Tab icon={<NotificationsActive />} />
            </Tabs>
          </Hidden>
          <Hidden smDown>
            <Tabs
              value={value}
              onChange={handleChange}
              indicatorColor="primary"
              textColor="primary"
              variant="fullWidth"
            >
              <Tab label="ЭКСПЕРТЫ" icon={<AccountBox />} />
              <Tab
                label={
                  <Badge
                    className={classes.tabNotif}
                    color="secondary"
                    badgeContent={4}
                  >
                    СООБЩЕНИЯ
                  </Badge>
                }
                icon={<Chat />}
              />
              <Tab
                label={
                  <Badge
                    className={classes.tabNotif}
                    color="secondary"
                    badgeContent={4}
                  >
                    УВЕДОМЛЕНИЯ
                  </Badge>
                }
                icon={<NotificationsActive />}
              />
            </Tabs>
          </Hidden>

          {/* <IconButton>
            <AccountBox />
          </IconButton> */}
        </AppBar>
        {value === 0 && (
          <TabContainer>
            <Grid
              container
              justifyContent="center"
              spacing={1}
              style={{ marginTop: '6px', marginBottom: '12px' }}
            >
              <Grid item xs={2}>
                <Button
                  fullWidth
                  variant="contained"
                  size="small"
                  color="primary"
                >
                  ТАРОЛОГ
                </Button>
              </Grid>
              <Grid item xs={2}>
                <Button fullWidth variant="contained" size="small">
                  АСТРОЛОГ
                </Button>
              </Grid>
              <Grid item xs={2}>
                <Button fullWidth variant="contained" size="small">
                  ХИРОМАНТ
                </Button>
              </Grid>
              <Grid item xs={2}>
                <Button fullWidth variant="contained" size="small">
                  ПСИХОЛОГ
                </Button>
              </Grid>
              <Grid item xs={2}>
                <Button fullWidth variant="contained" size="small">
                  НОВЫЙ
                </Button>
              </Grid>
            </Grid>
            <Divider variant="inset" style={{ marginLeft: '0px' }} />
            <ContactListStyled openMenu={handleOpen} />
          </TabContainer>
        )}
        {value === 1 && (
          <TabContainer>
            <MessagesListStyled />
          </TabContainer>
        )}
        {value === 2 && (
          <TabContainer>
            <NotifListStyled openMenu={handleOpenAction} />
          </TabContainer>
        )}
      </Paper>
    </Fragment>
  );
}

ContactWidget.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ContactWidget);
