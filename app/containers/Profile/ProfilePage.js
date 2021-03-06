/* eslint-disable */
import React, { useState } from "react";
import { Helmet } from "react-helmet";
import PropTypes from "prop-types";
//api
import brand from "dan-api/dummy/brand";
import dummy from "dan-api/dummy/dummyContents";
import imgApi from "dan-api/images/photos";

//components
import TimelineWidget from "../../components/Widget/TimelineWidget";
import PapperBlock from "../../components/PapperBlock/PapperBlock";
import Cover from "dan-components/SocialMedia/Cover";
import {
  Paper,
  Hidden,
  Grid,
  Typography,
  IconButton,
  Chip,
  LinearProgress,
  Avatar,
  ListItem,
  ListItemText,
  ListItemAvatar,
  ListItemSecondaryAction,
  Tooltip,
  List,
  Button,
  Divider,
  AppBar,
  Tabs,
  Tab,
  Card,
  CardMedia,
  CardContent,
} from "@material-ui/core";
//images and icons
import bgCover from "dan-images/petal_bg.svg";
import {
  Adb,
  AssistantPhoto,
  AccountCircle,
  SupervisorAccount,
  Favorite,
  PhotoLibrary,
  AllInclusive,
  LocalPhone,
  DateRange,
  LocationOn,
  AcUnit,
  Chat,
  Check,
  AddCircleOutlineOutlined,
  AddCircleOutlineRounded,
  ArrowDropDown,
  SkipNextOutlined,
  SkipPrevious,
  SkipPreviousOutlined,
  ArrowForwardIosSharp,
  ArrowBackIosSharp,
} from "@material-ui/icons";
import PhoneIcon from "@material-ui/icons/Phone";
//styles
import { withStyles } from "@material-ui/core/styles";
import Type from "dan-styles/Typography.scss";
import classNames from "classnames";
import styles from "./profile-jss";
import useAuth from "../../hooks/useAuth";

import ProductCard from "../../components/CardPaper/ProductCard";
const balance = 5600.0;
function ProfilePage(props) {
  const { user } = useAuth();
  const title = brand.name + " - Profile";
  const description = brand.desc;
  const [value, setValue] = useState(0);
  const role = user.role.id == 4 ? "user" : "expert";
  const { classes, owner } = props;
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

      <Typography variant="h5" className={classes.title} component="h5">
        <span className={Type.bold}>
          {owner
            ? "?????? ??????????????"
            : role == "user"
            ? "?????????????? ??????????????"
            : "?????????????? ????????????????"}
        </span>
      </Typography>
      <Divider className={classes.divider} />
      <Cover
        owner={owner}
        coverImg={bgCover}
        avatar={dummy.user.avatar}
        name={
          `${user?.first_name || ""} ${user?.last_name || ""}`.trim() ||
          "???? ??????????????????"
        }
        desc={
          // TODO: ?????????????????? ????????
          role == "user"
            ? "?????????? ???? ??????????"
            : owner
            ? `?????? ???????????? ${balance}`
            : "??????????????"
        }
        role={role}
        buttonText={
          role == "user"
            ? "?????????????? ????????????????"
            : owner
            ? "?????????????? ????????????????"
            : "??????????????????"
        }
      />

      {role !== "user" && (
        <AppBar position="static" className={classes.profileTab}>
          <Hidden mdUp>
            <Tabs
              value={value}
              // onChange={handleChange}
              variant="fullWidth"
              indicatorColor="primary"
              textColor="primary"
              centered
            >
              {owner ? (
                <>
                  <Tab icon={<AccountCircle />} />
                  <Tab icon={<AddCircleOutlineOutlined />} />
                </>
              ) : (
                <>
                  <Tab icon={<AccountCircle />} />
                  <Tab icon={<SupervisorAccount />} />
                  <Tab icon={<Favorite />} />
                </>
              )}
            </Tabs>
          </Hidden>
          <Hidden smDown>
            {/* <Tabs
              value={value}
              // onChange={handleChange}
              variant="fullWidth"
              indicatorColor="primary"
              textColor="primary"
              centered
            > */}
            {owner ? (
              <Tabs
                value={value}
                // onChange={handleChange}
                variant="fullWidth"
                indicatorColor="primary"
                textColor="primary"
                centered
              >
                <Tab icon={<AccountCircle />} label="?????? ????????????" />
                <Tab icon={<AddCircleOutlineOutlined />} label=" ?????? ??????????" />
              </Tabs>
            ) : (
              <Tabs
                value={value}
                // onChange={handleChange}
                variant="fullWidth"
                indicatorColor="primary"
                textColor="primary"
                centered
              >
                <Tab icon={<AccountCircle />} label="????????????????" />
                <Tab icon={<SupervisorAccount />} label=" ????????????????" />
                <Tab icon={<Favorite />} label="????????????????" />
              </Tabs>
            )}
            {/* </Tabs> */}
          </Hidden>
        </AppBar>
      )}
      <Divider className={classes.divider} />
      {role == "user" ? (
        <Grid container spacing={3} className={classes.rootContent}>
          <Grid item md={7} sm={12} xs={12}>
            <TimelineWidget />
            <Divider className={classes.divider} />
            <PapperBlock
              title="?????? ????????????????"
              icon="ion-ios-aperture-outline"
              whiteBg
              desc=""
            >
              <Grid container className={classes.colList}>
                <Grid item md={4} sm={6}>
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar
                        className={classNames(
                          classes.avatar,
                          classes.purpleAvatar
                        )}
                      >
                        <AcUnit />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="??????????????????" />
                  </ListItem>
                </Grid>
                <Grid item md={4} sm={6}>
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar
                        className={classNames(
                          classes.avatar,
                          classes.greenAvatar
                        )}
                      >
                        <Adb />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="????????????" />
                  </ListItem>
                </Grid>
                <Grid item md={4} sm={6}>
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar
                        className={classNames(
                          classes.avatar,
                          classes.greenAvatar
                        )}
                      >
                        <Adb />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="????????????" />
                  </ListItem>
                </Grid>
                <Grid item md={4} sm={6}>
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar
                        className={classNames(
                          classes.avatar,
                          classes.pinkAvatar
                        )}
                      >
                        <AllInclusive />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="??????????????" />
                  </ListItem>
                </Grid>
                <Grid item md={4} sm={6}>
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar
                        className={classNames(
                          classes.avatar,
                          classes.orangeAvatar
                        )}
                      >
                        <AssistantPhoto />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="????????????????????????????" />
                  </ListItem>
                </Grid>

                <Grid item md={4} sm={6}>
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar
                        className={classNames(
                          classes.avatar,
                          classes.orangeAvatar
                        )}
                      >
                        <AssistantPhoto />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="????????????" />
                  </ListItem>
                </Grid>
              </Grid>
            </PapperBlock>
          </Grid>
          <Grid item md={5} sm={12} xs={12}>
            <div>
              <Paper className={classes.styledPaper} elevation={4}>
                <Typography variant="h5" component="h3">
                  <span className={Type.light}>???????????????????? ?????????????? </span>
                  <span className={Type.bold}>
                    ????????????????????????, ???? ?????????? ??????????
                  </span>
                </Typography>
                <Grid container justifyContent="center">
                  <Chip
                    avatar={
                      <Avatar color="rgba(21, 101, 192, 1)">
                        <Check />
                      </Avatar>
                    }
                    className={classes.chip}
                    label="60% Progress"
                    color="primary"
                  />
                </Grid>
                <LinearProgress
                  className={classes.progress}
                  variant="determinate"
                  value={60}
                />
              </Paper>
              <Divider className={classes.divider} />
              <PapperBlock
                title="?? ????????"
                icon="ion-ios-contact-outline"
                whiteBg
                noMargin
                desc="???????? ?????????? ??????????, ???? ??????????????"
              >
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
                          primary="???????? ??????????????"
                          secondary="20 ?????? 1981"
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemAvatar>
                          <Avatar>
                            <LocalPhone />
                          </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                          primary="??????????????"
                          secondary="+7(983)-876-54-32"
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemAvatar>
                          <Avatar>
                            <LocationOn />
                          </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="??????????" secondary="????????????" />
                      </ListItem>
                    </List>
                  </Grid>
                  <Grid item md={6}>
                    <List dense className={classes.profileList}>
                      <ListItem>
                        <ListItemAvatar>
                          <Avatar>
                            <LocationOn style={{ color: "#000" }} />
                          </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                          primary="?????????????????????? ??????????"
                          secondary="strahovkaorg@mail.ru"
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemAvatar>
                          <Avatar>
                            <LocationOn style={{ color: "#000" }} />
                          </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                          primary="???????? ??????????????"
                          secondary="??????????"
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemAvatar>
                          <Avatar>
                            <LocationOn style={{ color: "#000" }} />
                          </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                          primary="??????????"
                          secondary="??.?????????????????????? ????.???????????????????? 20/1"
                        />
                      </ListItem>
                    </List>
                  </Grid>
                </Grid>
              </PapperBlock>
              <Divider className={classes.divider} />
              <PapperBlock
                title="?????? ????????????????"
                icon="ion-ios-contacts-outline"
                whiteBg
                desc=""
              >
                <List dense className={classes.profileList}>
                  <ListItem button>
                    <Avatar
                      className={classNames(
                        classes.avatar,
                        classes.orangeAvatar
                      )}
                    >
                      H
                    </Avatar>
                    <ListItemText
                      primary="???????????? ??????????????"
                      secondary="2 ??????????????????"
                    />
                    <ListItemSecondaryAction>
                      <Tooltip title="Chat">
                        <IconButton
                          className={props.classes.blueText}
                          aria-label="Chat"
                        >
                          <Chat />
                        </IconButton>
                      </Tooltip>

                      <Tooltip title="Call">
                        <IconButton
                          className={props.classes.tealText}
                          aria-label="Call"
                        >
                          <PhoneIcon />
                        </IconButton>
                      </Tooltip>
                    </ListItemSecondaryAction>
                  </ListItem>
                  <ListItem button>
                    <Avatar
                      className={classNames(
                        classes.avatar,
                        classes.purpleAvatar
                      )}
                    >
                      J
                    </Avatar>
                    <ListItemText
                      primary="???????????? ????????"
                      secondary="1 ??????????????????"
                    />
                    <ListItemSecondaryAction>
                      <Tooltip title="Chat">
                        <IconButton
                          className={props.classes.blueText}
                          aria-label="Chat"
                        >
                          <Chat />
                        </IconButton>
                      </Tooltip>

                      <Tooltip title="Call">
                        <IconButton
                          className={props.classes.tealText}
                          aria-label="Call"
                        >
                          <PhoneIcon />
                        </IconButton>
                      </Tooltip>
                    </ListItemSecondaryAction>
                  </ListItem>
                  <ListItem button>
                    <Avatar
                      className={classNames(classes.avatar, classes.pinkAvatar)}
                    >
                      V
                    </Avatar>
                    <ListItemText
                      primary="?????????????????? ????????????????"
                      secondary="1 ??????????????????"
                    />
                    <ListItemSecondaryAction>
                      <Tooltip title="Chat">
                        <IconButton
                          className={props.classes.blueText}
                          aria-label="Chat"
                        >
                          <Chat />
                        </IconButton>
                      </Tooltip>

                      <Tooltip title="Call">
                        <IconButton
                          className={props.classes.tealText}
                          aria-label="Call"
                        >
                          <PhoneIcon />
                        </IconButton>
                      </Tooltip>
                    </ListItemSecondaryAction>
                  </ListItem>
                  <ListItem button>
                    <Avatar
                      className={classNames(
                        classes.avatar,
                        classes.greenAvatar
                      )}
                    >
                      H
                    </Avatar>
                    <ListItemText
                      primary="???????????????? ??????????"
                      secondary="1 ??????????????????"
                    />
                    <Hidden xsDown>
                      <ListItemSecondaryAction>
                        <Tooltip title="Chat">
                          <IconButton
                            className={props.classes.blueText}
                            aria-label="Chat"
                          >
                            <Chat />
                          </IconButton>
                        </Tooltip>

                        <Tooltip title="Call">
                          <IconButton
                            className={props.classes.tealText}
                            aria-label="Call"
                          >
                            <PhoneIcon />
                          </IconButton>
                        </Tooltip>
                      </ListItemSecondaryAction>
                    </Hidden>
                  </ListItem>
                </List>
                <Divider className={classes.divider} />
                <Grid container justifyContent="center">
                  <Button color="secondary" className={classes.button}>
                    ???????????????? ????????
                  </Button>
                </Grid>
              </PapperBlock>
            </div>
          </Grid>
        </Grid>
      ) : (
        <Grid container spacing={3}>
          {owner && (
            <Grid item xl={4} md={6} xs={12}>
              <Card className={classes.card}>
                <CardMedia className={classes.mediaProduct}>
                  <AddCircleOutlineRounded />
                </CardMedia>
                <CardContent>
                  <Typography
                    noWrap
                    gutterBottom
                    variant="h5"
                    className={classes.addCard}
                    component="h2"
                  >
                    ?????????? ???????????????? ?????????? ?????? ????????????
                  </Typography>
                  <Typography component="p" className={classes.desc}>
                    ??????????????
                    <AddCircleOutlineRounded />
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          )}
          {[1, 2, 3, 4, 5, 6, 7].map((card) => (
            <Grid item xl={4} md={6} xs={12}>
              <ProductCard
                thumbnail={imgApi[22]}
                name="???????????????? ?? ??????????"
                views={109}
                date="7?????? 2019 17:00"
                isLiked={card % 2}
                likes={11}
                dislikes={1}
                comments={["one", "two"]}
              />
            </Grid>
          ))}
        </Grid>
      )}
      {role != "user" && (
        <Grid
          justifyContent="flex-end"
          spacing={4}
          container
          style={{ padding: "24px" }}
        >
          <Grid item>
            <Typography>?????????? ???? ????????????????</Typography>
          </Grid>

          <Grid item>
            <ArrowDropDown className={classes.clickable} />
          </Grid>
          <Grid item>
            <Typography>1-5 ?????? 13</Typography>
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
      )}
    </div>
  );
}
ProfilePage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProfilePage);
