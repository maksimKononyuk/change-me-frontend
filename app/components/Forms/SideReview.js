import React, { Fragment } from 'react';
import { lighten, darken } from '@material-ui/core/styles/colorManipulator';
import dummy from 'dan-api/dummy/dummyContents';
import roles from 'dan-api/ui/roles';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import {
  Grid,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Button,
} from '@material-ui/core';

import { LocalPhone, DateRange, LocationOn } from '@material-ui/icons';
import useAuth from '../../hooks/useAuth';
import {
  getBirthdateString,
  getFormatPhone,
  getFullName,
  getFullRequisitesString,
} from '../../utils/stringFunctions';
const styles = (theme) => ({
  avatar: {
    borderRadius: '10px',
    width: theme.spacing(5.5),
    height: theme.spacing(5.5),
  },
  name: {
    fontSize: '24px',
    color: theme.palette.primary.main,
  },
  total: {
    fontWeight: '700',
  },
  title: {
    marginTop: theme.spacing(2),
  },
  topInfo: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'start',
  },
  orderSummary: {
    [theme.breakpoints.up('md')]: {
      width: 600,
      margin: '0 auto',
    },
  },
  paper: {
    background:
      theme.palette.type === 'dark'
        ? darken(theme.palette.secondary.main, 0.5)
        : lighten(theme.palette.secondary.light, 0.5),
    padding: theme.spacing(2),
    paddingTop: '5vh',
    paddingBottom: '5vh',
    // height: 550,
    // overflow: "auto",
    '& h6': {
      textAlign: 'center',
    },
  },
  divider: {
    margin: `${theme.spacing(1.5)}px 0`,
    background: 'none',
  },
  subtitle: {
    color: theme.palette.primary.main,
  },
});

function SideReview(props) {
  const { roleId, user } = useAuth();
  const { classes } = props;
  return (
    <Paper className={classes.paper} elevation={0}>
      {/* <Typography variant="h6" gutterBottom> */}
      <Grid container spacing={3}>
        <Grid item>
          <img
            src={user.avatar || dummy.user.avatar}
            alt="avatar"
            className={classes.avatar}
          />
        </Grid>
        <Grid item>
          <div className={classes.topInfo}>
            <Typography variant="h5" component="h5" className={classes.name}>
              {getFullName(user.first_name, user.last_name)}
            </Typography>
            <Typography>{user?.biography}</Typography>
          </div>
        </Grid>
      </Grid>
      <Divider className={classes.divider} />

      <Divider />
      <Divider className={classes.divider} />

      <Grid container>
        <Grid item md={6}>
          <List dense className={classes.profileList}>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <DateRange />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary="Дата рождения"
                secondary={getBirthdateString(user?.birthdate)}
              />
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <LocalPhone />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary="Телефон"
                secondary={getFormatPhone(user?.phone)}
              />
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <LocationOn />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary="Город"
                secondary={user?.city?.name || 'Не заполнено'}
              />
            </ListItem>
          </List>
        </Grid>
        <Grid item md={6}>
          <List dense className={classes.profileList}>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <LocationOn style={{ color: '#000' }} />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary="Электронная почта"
                secondary={user?.email || 'Не заполнено'}
              />
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <LocationOn style={{ color: '#000' }} />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary="Знак зодиака"
                secondary={user?.zodiac_sign?.name || 'Не заполнено'}
              />
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <LocationOn style={{ color: '#000' }} />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary="Адрес"
                // TODO: Проверить работает ли адрес
                secondary={user?.requisites?.legal_address || 'Не заполнено'}
              />
            </ListItem>
          </List>
        </Grid>
      </Grid>
      <Divider />
      <Divider className={classes.divider} />
      {roleId === roles.client.id ? (
        <>
          <Typography variant="p" className={classes.subtitle}>
            Мои интересы:
          </Typography>
          <Divider className={classes.divider} />

          <Grid container spacing={3}>
            {user?.interests?.map((interest) => (
              <Grid item key={`INTEREST_${interest.name}_${interest.id}`}>
                <Button variant="contained" color="primary" size="medium">
                  {interest.name.toUpperCase()}
                </Button>
              </Grid>
            ))}
          </Grid>
        </>
      ) : (
        <>
          <Typography variant="p" className={classes.subtitle}>
            Реквизиты
          </Typography>
          <Divider className={classes.divider} />

          <Typography>{getFullRequisitesString(user?.requisites)}</Typography>
          <Divider className={classes.divider} />

          <Divider />
          <Divider className={classes.divider} />

          <Typography variant="p" className={classes.subtitle}>
            О себе:
          </Typography>
          <Divider className={classes.divider} />

          <Typography>
            {/* TODO: Спросить про О себе: */}
            Мы работаем более 8 лет, и за это время составили тысячи резюме для
            специалистов из разных областей. Примеры получившихся документов,
            как и отзывы от довольных клиентов, мы всегда с радостью показываем.
          </Typography>
        </>
      )}
      {/* </Typography> */}
    </Paper>
  );
}

SideReview.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SideReview);
