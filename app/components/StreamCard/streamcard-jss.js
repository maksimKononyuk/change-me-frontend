import pink from '@material-ui/core/colors/pink';
const styles = (theme) => ({
  card: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 150,
    height: 150,
  },
  avatar: {
    width: 40,
    height: 40,
  },
  cardSocmed: {
    // [theme.breakpoints.up("md")]: {
    //   marginLeft: 90,
    //   minWidth: 400,
    // },
    // marginBottom: theme.spacing(3),
    // position: "relative",
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  iconBullet: {},
  icon: {},
  rightIcon: {
    marginLeft: 'auto',
    display: 'flex',
    alignItems: 'center',
  },
  liked: {
    color: pink[500],
  },
});

export default styles;
