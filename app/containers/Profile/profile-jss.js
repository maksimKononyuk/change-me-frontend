/* eslint-disable */
import deepOrange from "@material-ui/core/colors/deepOrange";
import deepPurple from "@material-ui/core/colors/deepPurple";
import pink from "@material-ui/core/colors/pink";
import green from "@material-ui/core/colors/green";
import colorfull from "dan-api/palette/colorfull";
import { alpha, darken } from "@material-ui/core/styles";

const styles = (theme) => ({
  rootDetail: {
    paddingLeft: "10%",
    paddingRight: "10%",
    paddingBottom: "5vh",
  },
  rootContent: {
    [theme.breakpoints.down("sm")]: {
      paddingLeft: 0,
      paddingRight: 0,
    },
    paddingLeft: theme.spacing(5.5),
    paddingRight: theme.spacing(5.5),
  },
  profileList: {
    padding: 0,
    "& li": {
      paddingLeft: 0,
    },
  },
  avatar: {
    margin: 10,
  },
  orangeAvatar: {
    backgroundColor: deepOrange[500],
  },
  purpleAvatar: {
    backgroundColor: deepPurple[500],
  },
  pinkAvatar: {
    backgroundColor: pink[500],
  },
  greenAvatar: {
    backgroundColor: green[500],
  },
  tealText: {
    color: colorfull[3],
    "& svg": {
      fill: colorfull[3],
    },
  },
  blueText: {
    color: colorfull[2],
    "& svg": {
      fill: colorfull[2],
    },
  },
  divider: {
    margin: `${theme.spacing(1.5)}px 0`,
    background: "none",
  },
  divider2: {
    margin: `${theme.spacing(5)}px 0`,
    background: "none",
  },
  clickable: {
    cursor: "pointer",
  },
  profileTab: {
    marginTop: -72,
    [theme.breakpoints.down("sm")]: {
      marginTop: -48,
    },
    borderRadius: `0 0 ${theme.rounded.medium} ${theme.rounded.medium}`,
    background: alpha(theme.palette.background.paper, 0.8),
    position: "relative",
  },
  albumRoot: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
    "& > *": {
      width: "100%",
    },
  },
  gridList: {
    width: 500,
    height: "auto",
  },
  icon: {
    color: "rgba(255, 255, 255, 0.54)",
  },
  img: {
    maxWidth: "none",
  },
  root: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing(3),
    [theme.breakpoints.up("sm")]: {
      paddingLeft: theme.spacing(3),
      paddingRight: theme.spacing(3),
    },
  },
  progressRoot: {
    marginBottom: theme.spacing(3),
  },
  styledPaper: {
    backgroundColor: theme.palette.secondary.main,
    padding: 20,
    "& $title, & $subtitle": {
      color: theme.palette.common.white,
    },
  },
  progress: {
    marginTop: 20,
    background: theme.palette.secondary.dark,
    "& div": {
      background: theme.palette.primary.light,
    },
  },
  chip: {
    marginTop: 20,
    background: theme.palette.common.white,
    color: theme.palette.primary.main,
    "& div": {
      backgroundColor: "#458b45",
      color: theme.palette.common.white,
    },
  },
  colList: {
    "& li": {
      padding: "10px 10px",
    },
    "& $avatar": {
      margin: 0,
    },
  },
  title: {
    fontSize: 32,
  },
  addCard: {
    paddingTop: 50,
    position: "relative",

    fontSize: 30,
    // height: 30,
    fontWeight: theme.typography.fontWeightMedium,
  },
  subtitle: {},
  rootAlbum: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
  },
  image: {
    position: "relative",
    height: "auto",
    boxShadow: theme.shadows[6],
    borderRadius: theme.rounded.medium,
    overflow: "hidden",
    marginBottom: 30,
    width: "100% !important", // Overrides inline-style
    "&:hover, &$focusVisible": {
      zIndex: 1,
      "& $imageBackdrop": {
        opacity: 0.6,
      },
      "& $imageMarked": {
        opacity: 0,
      },
      "& $imageTitle": {
        border: "4px solid currentColor",
      },
    },
  },
  imageButton: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: theme.palette.common.white,
  },
  imageBackdrop: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create("opacity"),
  },
  imageTitle: {
    position: "relative",
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${
      theme.spacing(1) + 6
    }px`,
  },
  imageMarked: {
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: "absolute",
    bottom: -2,
    left: "calc(50% - 9px)",
    transition: theme.transitions.create("opacity"),
  },
  mediaProduct: {
    aspectRatio: "16 / 9",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "& svg": {
      height: "auto",
      width: "25%",
    },
    // paddingTop: "60.25%", // 16:9
  },
  card: {
    height: "100%",
    alignSelf: "stretch",
  },
  focusVisible: {},
  gridListAlbum: {
    height: "auto",
    background: theme.palette.common.black,
  },
  subheader: {
    width: "100%",
  },
  add: {
    backgroundColor: theme.palette.secondary.main,
    width: "100%",
    aspectRatio: "1 / 1",
    height: "auto",
  },
  icon: {
    width: "25%",
    height: "25%",
    color: theme.palette.secondary.light,
  },
  smallIcon: {
    height: "100%",
    marginLeft: "1vw",
    width: "3vw",
    color: theme.palette.secondary.main,
  },
});

export default styles;
