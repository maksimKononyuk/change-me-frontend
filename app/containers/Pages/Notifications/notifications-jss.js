const styles = (theme) => ({
  root: {
    backgroundColor: '#424242',
  },
  divider: {
    margin: `${theme.spacing(3)}px 0`,
    background: 'none',
  },
  container: {
    padding: '30px 20px',
    '& p ': {
      cursor: 'pointer',
    },
    '& svg': {
      cursor: 'pointer',
      height: '2.5vw',
      minHeight: '30px',
      width: 'auto',
    },
  },
  avatar: {
    marginRight: theme.spacing(1),
    boxShadow: theme.glow.light,
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    '& svg': {
      fontSize: 24,
    },
    '&$sm': {
      width: 30,
      height: 30,
    },
    '&$mc': {
      width: 24,
      height: 24,
      top: 0,
      left: 8,
      marginRight: 0,
    },
  },
  rootContact: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
    overflow: 'hidden',
    '& header + div': {
      padding: '8px !important',
    },
  },
  button: {
    marginRight: theme.spacing(1),
  },
  clickable: {
    cursor: 'pointer',
  },
});

export default styles;
