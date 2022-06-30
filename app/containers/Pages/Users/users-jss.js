import { alpha, darken } from '@material-ui/core/styles';

const styles = (theme) => ({
  cover: {
    '& $name, & $subheading': {
      color: theme.palette.common.white,
    },
    position: 'relative',
    width: '100%',
    overflow: 'hidden',
    height: '100vh',
    backgroundColor:
      theme.palette.type === 'dark'
        ? darken(theme.palette.primary.dark, 0.4)
        : theme.palette.primary.dark,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundSize: 'cover',
    textAlign: 'center',
    boxShadow: theme.shadows[7],
    backgroundPosition: 'bottom center',
  },
});
export default styles;
