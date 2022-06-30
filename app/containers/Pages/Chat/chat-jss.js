const drawerHeight = 680;

const styles = (theme) => ({
  root: {
    flexGrow: 1,
    height: drawerHeight,
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    borderRadius: theme.rounded.medium,
    boxShadow: theme.shade.light,
    marginBottom: theme.spacing(3),
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
    },
  },
  divider: {
    background: 'none',
    margin: `${theme.spacing(2)}px 0`,
  },
});

export default styles;
