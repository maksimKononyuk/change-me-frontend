import React, { useState } from 'react';
import PropTypes from 'prop-types';
// import Typography from "@material-ui/core/Typography";
import {
  withStyles,
  withWidth,
  Typography,
  Card,
  IconButton,
  Tooltip,
  CardMedia,
  CardActions,
  CardContent,
  Button,
  Grid,
  Avatar,
} from '@material-ui/core';
// import withWidth, { isWidthUp } from "@material-ui/core/withWidth";
import classNames from 'classnames';
// import Card from "@material-ui/core/Card";
// import IconButton from "@material-ui/core/IconButton";
// import Tooltip from "@material-ui/core/Tooltip";
// import CardMedia from "@material-ui/core/CardMedia";
// import CardActions from "@material-ui/core/CardActions";
// import CardContent from "@material-ui/core/CardContent";
// import Button from "@material-ui/core/Button";
// import Grid from "@material-ui/core/Grid";
import {
  Comment,
  Favorite,
  Share,
  ThumbDown,
  ThumbUp,
} from '@material-ui/icons';
import styles from './cardStyle-jss';

function ProductCard(props) {
  const {
    classes,
    thumbnail,
    name,
    views,
    date,
    isLiked,
    likes,
    dislikes,
    comments,
    width,
  } = props;
  const [liked, setLiked] = useState(isLiked);
  const [status, setStatus] = useState('');
  return (
    <Card
      className={classNames(
        classes.cardProduct
        //  classes.cardList : ""
      )}
    >
      <CardMedia
        className={classes.mediaProduct}
        image={thumbnail}
        title={name}
      />
      <CardContent className={classes.floatingButtonWrap}>
        <Typography
          noWrap
          gutterBottom
          variant="h5"
          className={classes.title}
          component="h2"
        >
          {name}
        </Typography>
        <Typography component="p" className={classes.desc}>
          {`${views} просмотров ${date}`}
        </Typography>
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item>
            <Avatar
              className={liked ? classes.liked : classes.favorite}
              onClick={() => {
                setLiked(!liked);
              }}
            >
              <Favorite />
            </Avatar>
          </Grid>
          <Grid
            item
            container
            justifyContent="flex-end"
            md={8}
            xs={10}
            spacing={1}
            alignItems="center"
          >
            <Grid
              item
              className={classes.clickable}
              onClick={() => {
                if (status !== 'liked') {
                  setStatus('liked');
                } else {
                  setStatus('');
                }
              }}
            >
              <Tooltip title="Like">
                <Avatar className={classes.greenText} size="small">
                  <ThumbUp />
                </Avatar>
              </Tooltip>
            </Grid>
            <Grid item>
              <Typography>{status === 'liked' ? likes + 1 : likes}</Typography>
            </Grid>

            <Grid
              item
              className={classes.clickable}
              onClick={() => {
                if (status !== 'disliked') {
                  setStatus('disliked');
                } else {
                  setStatus('');
                }
              }}
            >
              <Tooltip title="Dislike">
                <Avatar className={classes.greenText} size="small">
                  <ThumbDown />
                </Avatar>
              </Tooltip>
            </Grid>
            <Grid>
              <Typography>
                {status === 'disliked' ? dislikes + 1 : dislikes}
              </Typography>
            </Grid>
            <Grid item>
              <IconButton>
                <Share />
              </IconButton>
            </Grid>

            <Grid item>
              <IconButton>
                <Comment />
              </IconButton>
            </Grid>
            <Grid item>
              <Typography>{comments.length}</Typography>
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions className={classes.price}>
        <div className={classes.rightAction}>
          <Button
            size="small"
            variant="outlined"
            color="secondary"
            onClick={() => {
              window.location = '/video/id';
            }}
          >
            на весь экран
          </Button>
        </div>
      </CardActions>
    </Card>
  );
}

ProductCard.propTypes = {
  classes: PropTypes.object.isRequired,
  width: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  views: PropTypes.any.isRequired,
  date: PropTypes.string.isRequired,
  isLiked: PropTypes.bool.isRequired,
  likes: PropTypes.any.isRequired,
  dislikes: PropTypes.any.isRequired,
  comments: PropTypes.any.isRequired,
};

const ProductCardResponsive = withWidth()(ProductCard);
export default withStyles(styles)(ProductCardResponsive);
