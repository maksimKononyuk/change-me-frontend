/* eslint-disable */
import green from '@material-ui/core/colors/green'
import colorfull from 'dan-api/palette/colorfull'
const styles = (theme) => ({
  root: {
    backgroundColor: '#424242'
  },
  divider: {
    margin: `${theme.spacing(3)}px 0`,
    background: 'none'
  },
  header: {
    paddingTop: '38px',
    paddingBottom: '38px',
    paddingLeft: '64px',
    [theme.breakpoints.down('sm')]: {
      // paddingRight: "auto",
      display: 'flex',
      justifyContent: 'center',
      paddingLeft: '19px'
    }
  },
  icon: {
    width: '1.5vw',
    minWidth: '25px',
    height: 'auto',
    cursor: 'pointer'
  },
  disabled: {
    width: '1.5vw',
    minWidth: '25px',
    height: 'auto',
    color: '#ffffff77'
  },
  greenAvatar: {
    backgroundColor: green[500],
    width: '1vw',
    height: '1vw',
    minWidth: '20px',
    minHeight: '20px',
    '& svg': {
      fill: '#fff',
      height: '0.5vw',
      minHeight: '10px',
      width: '0.5vw',
      minWidth: '10px'
    }
  },
  filters: {
    [theme.breakpoints.down('sm')]: {
      alignItems: 'center'
    }
  },
  clickable: {
    cursor: 'pointer'
  },
  selected: {
    color: theme.palette.primary.main
  },
  reversed: {
    width: '1.5vw',
    minWidth: '25px',
    height: 'auto',
    transform: 'scaleY(-1)'
  },
  listItem: {
    padding: '20px 0'
  },
  stars: {
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'flex-start'
    }
  },
  blue: {
    color: theme.palette.primary.main
  },
  container: {
    padding: '25px 33px'
  },
  contact: {
    padding: '5px 0'
  },
  avatar: {
    width: '4vw',
    height: 'auto',
    minWidth: '50px'
  },
  grey: {
    color: '#FFFFFFB2'
  },
  hide: {
    display: 'block',

    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  },
  greenText: {
    color: '#fff',
    backgroundColor: green[500],
    padding: ' min(0.5vw, 20px)',
    '& svg': {
      fill: '#fff',
      height: '1vw',
      width: '1vw',
      minWidth: '25px',
      minHeight: '25px'
    }
  },
  greenTextActive: {
    backgroundColor: 'grey'
  },
  blueText: {
    color: '#fff',
    backgroundColor: colorfull[2],
    '& svg': {
      fill: '#fff',
      height: '1vw',
      width: '1vw',
      minWidth: '20px',
      minHeight: '20px'
    }
  }
})

export default styles
