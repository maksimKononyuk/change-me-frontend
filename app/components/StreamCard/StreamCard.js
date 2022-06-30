import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import CommentIcon from '@material-ui/icons/Comment';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Button, Grid, Icon } from '@material-ui/core';
import styles from './streamcard-jss';

function StreamCard(props) {
  const { classes, onlike } = props;

  const [anchorElOpt, setAnchorElOpt] = useState(null);
  const [openComment, setOpenComment] = useState(false);

  const handleClickOpt = (event) => {
    setAnchorElOpt(event.currentTarget);
  };

  const handleCloseOpt = () => {
    setAnchorElOpt(null);
  };

  const handleOpenComment = (data) => {
    fetchComment(data);
    setOpenComment(true);
  };

  const handleCloseComment = () => {
    setOpenComment(false);
  };

  return (
    <Card className={classes.cardSocmed}>
      <CardHeader
        avatar={
          <Avatar
            alt="avatar"
            src="https://s3-alpha-sig.figma.com/img/ed48/d446/e87de4ec755714a5da51437e481cda26?Expires=1656288000&Signature=apRdusfgtjO4A5pR6ml0Nt7g~vPS9qSomjxufr1vSj4ADGLjmrOCUnFYi0Bc-tifB9448WCNhmq6r79CqolVcyn2o7K8atVM9ux6Q24q4Zewr5aas9cFK04kEnvlSoVx48dQ4caMbhJsqS1bqNIWqeCpOqsqcnS8tMpboo-kQynYjXm6ocHnECOgpI-RAQw4obQtLu1GZzwdycrPnPomwt4YQHGzRxhL0GX1b4Dz~u4Ucu7CSjg~Ldn39C~iupaPpEoYj34WU~sYOC-dy1Mzw8jFUKBTxWUpZ51PBbZGs2nS~MgpwEce17Ca6S13uBQ34armJqwQ2EPxJhs5ezoOjA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
            className={classes.avatar}
          />
        }
        action={
          <IconButton
            aria-label="More"
            aria-owns={anchorElOpt ? 'long-menu' : null}
            aria-haspopup="true"
            className={classes.button}
            onClick={handleClickOpt}
          >
            <MoreVertIcon />
          </IconButton>
        }
        title="Чернов Илья"
        subheader="21 января 2022 15:00"
      />
      {'https://s3-alpha-sig.figma.com/img/29ad/9882/67ea4ca63890874cac8344e6b9e130fd?Expires=1656288000&Signature=c9v9cSVURCkYU1ZQYAN3vdFhPyy~tyCzj0QeYBqyOwOKfflkwMIKLFm8fAH2B3Vy~~nz~Sm6~1A5Wbe0AD2B7yPgIrw2da5ZcMlNgPLOfKPYOV5TWQ4xOsu538URral1fdKKIAnzuMwtwj4ViMecNKkws-xHdHGwRoJ72LOpNrlvt00IhGfn7LiNDbD5K~jNetM~4p2ExHtOHQbDnQLqaqfWtiP159-euzg25Wg9V~ZnXI7p3VOH~naE7OvZTZD~gZYtVrg42NRODQyxSUxz4WmZbIioJCa1k~aoO3W93wRgyEGz2IGPQoRuAJJCerVMApaVpHl6e5gz4Twe9E2vIw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA' !==
        '' && (
        <div style={{ position: 'relative' }}>
          <CardMedia
            className={classes.media}
            image="https://s3-alpha-sig.figma.com/img/29ad/9882/67ea4ca63890874cac8344e6b9e130fd?Expires=1656288000&Signature=c9v9cSVURCkYU1ZQYAN3vdFhPyy~tyCzj0QeYBqyOwOKfflkwMIKLFm8fAH2B3Vy~~nz~Sm6~1A5Wbe0AD2B7yPgIrw2da5ZcMlNgPLOfKPYOV5TWQ4xOsu538URral1fdKKIAnzuMwtwj4ViMecNKkws-xHdHGwRoJ72LOpNrlvt00IhGfn7LiNDbD5K~jNetM~4p2ExHtOHQbDnQLqaqfWtiP159-euzg25Wg9V~ZnXI7p3VOH~naE7OvZTZD~gZYtVrg42NRODQyxSUxz4WmZbIioJCa1k~aoO3W93wRgyEGz2IGPQoRuAJJCerVMApaVpHl6e5gz4Twe9E2vIw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
            title="name"
          />
          <Grid
            container
            direction="column"
            alignItems="center"
            // justifyContent="center"
            style={{ position: 'absolute', top: '40%' }}
            spacing={1}
          >
            <Grid item>
              <Typography variant="h6">
                Через 30 минут эксперт проведет трансляцию
              </Typography>
            </Grid>
            <Grid item>
              <Button variant="contained" color="primary">
                <Icon>play_arrow</Icon>
                СМОТРЕТЬ
              </Button>
            </Grid>
          </Grid>
        </div>
      )}
      <CardContent>
        <Typography component="p">Трансляция 30.02.2022</Typography>
        <Typography component="p">Основы жизненной философии</Typography>
      </CardContent>
      <CardActions className={classes.actions}>
        <IconButton aria-label="Like this" onClick={() => onlike(data)}>
          <FavoriteIcon className={true ? classes.liked : ''} />
        </IconButton>
        <IconButton aria-label="Share">
          <ShareIcon />
        </IconButton>
        <div className={classes.rightIcon}>
          <Typography variant="caption" component="span">
            {['comment1'] !== undefined ? ['comment1'].length : 0}
          </Typography>
          <IconButton
            aria-label="Comment"
            // onClick={() => handleOpenComment(data)}
          >
            <CommentIcon />
          </IconButton>
        </div>
      </CardActions>
    </Card>
  );
}

StreamCard.propTypes = {
  classes: PropTypes.object.isRequired,
  onlike: PropTypes.func,
};

StreamCard.defaultProps = {
  onlike: () => false,
};

// export default StreamCard;

export default withStyles(styles)(StreamCard);
