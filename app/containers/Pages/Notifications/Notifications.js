import React from 'react';

import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import brand from 'dan-api/dummy/brand';
import {
  Grid,
  Paper,
  withStyles,
  Button,
  IconButton,
  Typography,
  Divider,
  Avatar,
  NavLink,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  Hidden,
} from '@material-ui/core';
import {
  ArrowBackIosSharp,
  ArrowDropDown,
  ArrowForwardIosSharp,
  SkipNextOutlined,
  SkipPreviousOutlined,
  MoreVertIcon,
  FullscreenRounded,
} from '@material-ui/icons';
import classNames from 'classnames';
import avatarApi from 'dan-api/images/avatars';
import styles from './notifications-jss';

const dataContact = [
  {
    id: '1',
    avatar: avatarApi[9],
    name: 'James Doe',
    title: 'Administrator',
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
    title: 'System Engineer',
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
    title: 'Executive',
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
    title: 'Security',
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
    title: 'Marketing',
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
    title: 'Actor',
    phone: '+2234561234',
    secondaryPhone: '+6742234235666',
    personalEmail: 'johny_doe@mail.com',
    companyEmail: '',
    address: 'Vivacus Street no.2 Block C/10A, Paris',
    website: '',
    favorited: true,
  },
];

function NotificationsPage(props) {
  const title = brand.name + ' - Blank Page';
  const description = brand.desc;
  const { classes } = props;
  return (
    <div>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
      </Helmet>
      <Typography variant="h4" component="h5">
        Уведомления
      </Typography>
      <Divider className={classes.divider} />
      <Paper className={classes.root}>
        {/* <Typography>Text</Typography> */}
        <Grid
          container
          className={classes.container}
          justifyContent="flex-end"
          alignItems="center"
          spacing={1}
        >
          <Grid item>
            <Typography>Прочитать все</Typography>
          </Grid>
          <Grid item>
            <FullscreenRounded />
          </Grid>
        </Grid>
        <Divider />
        <List>
          {[1, 2, 3, 4, 5].map((_) => (
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
                  <Button
                    variant="outlined"
                    size="small"
                    className={classes.button}
                  >
                    Прочитать
                  </Button>
                </ListItemSecondaryAction>
              </Hidden>
              <Hidden smUp>
                <ListItemSecondaryAction>
                  <IconButton aria-label="More" aria-haspopup="true">
                    <MoreVertIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </Hidden>
            </ListItem>
          ))}
        </List>
        <Divider />
        <Grid
          justifyContent="flex-end"
          spacing={4}
          container
          style={{ padding: '24px' }}
        >
          <Grid item>
            <Typography>Экспертов на странице</Typography>
          </Grid>

          <Grid item>
            <ArrowDropDown className={classes.clickable} />
          </Grid>
          <Grid item>
            <Typography>1-5 или 13</Typography>
          </Grid>
          <Grid item>
            <SkipPreviousOutlined className={classes.clickable} />
          </Grid>
          <Grid item>
            <ArrowBackIosSharp className={classes.clickable} />
          </Grid>
          <Grid item>
            <ArrowForwardIosSharp className={classes.clickable} />
          </Grid>
          <Grid item>
            <SkipNextOutlined className={classes.clickable} />
          </Grid>
        </Grid>
      </Paper>
      <Divider className={classes.divider} />
    </div>
  );
}
NotificationsPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NotificationsPage);
