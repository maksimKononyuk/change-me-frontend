import { green } from '@material-ui/core/colors';

const styles = (theme) => ({
  root: {
    flexGrow: 1,
  },
  rootDetail: {
    marginTop: theme.spacing(1),
    paddingBottom: theme.spacing(6),
  },
  item: {
    textAlign: 'center',
    '& img': {
      margin: '10px auto',
    },
  },
  detailWrap: {
    marginTop: '10vh',
    position: 'relative',
    padding: theme.spacing(2),
  },
  tags: {
    width: '80%',
    padding: theme.spacing(2),
  },
  arrow: {
    display: 'flex',
    padding: theme.spacing(2),
    alignItems: 'center',
    '& svg': {
      width: theme.spacing(3),
      height: theme.spacing(3),
    },
  },
  subtitle: {
    margin: `${theme.spacing(6)}px ${theme.spacing(2)}px ${theme.spacing(2)}px`,
  },

  desc: {
    padding: theme.spacing(2),
  },
  imgGallery: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(8),
    [theme.breakpoints.down('md')]: {
      marginRight: theme.spacing(8),
    },
    [theme.breakpoints.down('sm')]: {
      marginRight: theme.spacing(2),
      marginLeft: theme.spacing(2),
    },
  },
  greenText: {
    color: '#fff',
    backgroundColor: green[500],
    padding: '0.5vw',
    '& svg': {
      fill: '#fff',
      // height: "1vw",
      // width: "1vw",
    },
  },
  favorite: {
    backgroundColor: '#BDBDBD',
    '& svg': {
      fill: '#fff',
      // height: "1vw",
      // width: "1vw",
    },
  },
  liked: {
    backgroundColor: theme.palette.primary.main,
    '& svg': {
      fill: '#fff',
      // height: "1vw",
      // width: "1vw",
    },
  },
  divider: {
    background: 'none',
    margin: `${theme.spacing(2)}px 0`,
  },
});

export default styles;
