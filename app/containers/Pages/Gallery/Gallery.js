import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Helmet } from 'react-helmet';
import brand from 'dan-api/dummy/brand';
import imgApi from 'dan-api/images/photos';
import SearchIcon from '@material-ui/icons/Search';

import {
  withStyles,
  Grid,
  Typography,
  Divider,
  AppBar,
  Toolbar,
  Avatar,
  Button,
  Card,
  CardMedia,
  CardContent,
} from '@material-ui/core';
import {
  ChevronRightRounded,
  Favorite,
  AddCircleOutlineRounded,
  ArrowDropDown,
  SkipNextOutlined,
  SkipPrevious,
  SkipPreviousOutlined,
  ArrowForwardIosSharp,
  ArrowBackIosSharp,
} from '@material-ui/icons';
import ProductCard from '../../../components/CardPaper/ProductCard';

const styles = (theme) => ({
  card: {
    height: '100%',
    alignSelf: 'stretch',
  },
  clickable: {
    cursor: 'pointer',
  },
  mediaProduct: {
    aspectRatio: '16 / 9',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '& svg': {
      height: 'auto',
      width: '25%',
    },
    // paddingTop: "60.25%", // 16:9
  },
  addCard: {
    paddingTop: 50,
    position: 'relative',

    fontSize: 30,
    // height: 30,
    fontWeight: theme.typography.fontWeightMedium,
  },
  favorite: {
    backgroundColor: '#BDBDBD',
    '& svg': {
      fill: '#fff',
    },
  },
  root: {
    flexGrow: 1,
    margin: theme.spacing(2, 0, 4),
    borderRadius: 40,
    overflow: 'hidden',
    boxShadow: theme.shadows[5],
  },
  divider: {
    margin: `${theme.spacing(3)}px 0`,
    background: 'none',
  },
  flex: {
    flex: 1,
  },
  wrapper: {
    fontFamily: theme.typography.fontFamily,
    position: 'relative',
    marginRight: theme.spacing(2),
    marginLeft: theme.spacing(1),
    borderRadius: 20,
    display: 'block',
    color: theme.palette.text.secondary,
    '& svg': {
      fill: theme.palette.text.secondary,
    },
  },
  search: {
    width: 'auto',
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    font: 'inherit',
    padding: `${theme.spacing(1)}px ${theme.spacing(1)}px ${theme.spacing(
      1
    )}px ${theme.spacing(4)}px`,
    border: 0,
    display: 'block',
    verticalAlign: 'middle',
    whiteSpace: 'normal',
    background: 'none',
    margin: 0, // Reset for Safari
    color: 'inherit',
    width: '100%',
    '&:focus': {
      outline: 0,
    },
  },
  icon: {
    '& svg': {
      height: '4vh',
      width: 'auto',
    },
  },
});

function checkAll(arr) {
  for (const i of arr) {
    if (i === 0) {
      return 0;
    }
  }
  return 1;
}
function Gallery(props) {
  const { classes, owner } = props;
  const title = brand.name + '';
  const description = brand.desc;
  const filters = [
    'ВИДЕОУРОКИ',
    ' ТРАНСЛЯЦИИ',
    'ВИДЕОЗВОНОК',
    'СТАТЬИ',
    'КАРЬЕРА',
    'САМОРЕАЛИЗАЦИЯ',
    'ДЕНЬГИ',
  ];
  const [selected, setSelected] = useState(Array(filters.length).fill(0));
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
      <Typography variant="h4" component="h5">
        ГАЛЕРЕЯ
      </Typography>
      <Divider className={classes.divider} />
      <AppBar position="static" color="inherit" className={classes.root}>
        <Toolbar>
          <div className={classes.flex}>
            <div className={classes.wrapper}>
              <div className={classes.search}>
                <SearchIcon />
              </div>
              <input className={classes.input} placeholder="Поиск" />
            </div>
          </div>
          <Typography variant="caption" className={classes.result}>
            11 &nbsp; Результатов
          </Typography>
        </Toolbar>
      </AppBar>
      <Grid container justifyContent="space-between">
        <Grid item md={1}>
          <Avatar className={classes.favorite}>
            <Favorite />
          </Avatar>
        </Grid>
        <Grid
          item
          container
          md={8}
          sm={6}
          justifyContent="center"
          spacing={2}
          style={{
            height: ' 3rem',
            overflow: 'hidden',
          }}
        >
          <Grid item>
            <Button
              variant="contained"
              color={!checkAll(selected) ? 'white' : 'primary'}
              size="medium"
              onClick={() => {
                if (!checkAll(selected)) {
                  setSelected(Array(selected.length).fill(1));
                } else {
                  setSelected(Array(selected.length).fill(0));
                }
              }}
            >
              ВСЕ
            </Button>
          </Grid>
          {filters.map((item, index) => (
            <Grid item>
              <Button
                variant="contained"
                color={selected[index] === 0 ? 'white' : 'primary'}
                size="medium"
                onClick={() => {
                  const f = [...selected];
                  f[index] = !f[index];
                  setSelected(f);
                }}
              >
                {item}
              </Button>
            </Grid>
          ))}

          {/* <Grid item>
            <Button variant="contained" color="primary" size="medium">
              ВИДЕОУРОКИ
            </Button>
          </Grid>
          <Grid item>
            <Button variant="contained" color="white" size="medium">
              ТРАНСЛЯЦИИ
            </Button>
          </Grid>
          <Grid item>
            <Button variant="contained" color="white" size="medium">
              ВИДЕОЗВОНОК
            </Button>
          </Grid>
          <Grid item>
            <Button variant="contained" color="white" size="medium">
              СТАТЬИ
            </Button>
          </Grid>
          <Grid item>
            <Button variant="contained" color="white" size="medium">
              КАРЬЕРА
            </Button>
          </Grid>
          <Grid item>
            <Button variant="contained" color="white" size="medium">
              САМОРЕАЛИЗАЦИЯ
            </Button>
          </Grid>
          <Grid item>
            <Button variant="contained" color="white" size="medium">
              ДЕНЬГИ
            </Button>
          </Grid> */}
        </Grid>
        <Grid item md={1} justifyContent="flex-end" className={classes.icon}>
          <Grid item>
            <ChevronRightRounded />
          </Grid>
        </Grid>
      </Grid>
      <Divider className={classes.divider} />

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
                  Чтобы добавить видео или статью
                </Typography>
                <Typography component="p" className={classes.desc}>
                  Нажмите
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
              name="Гармония с собой"
              views={109}
              date="7мар 2019 17:00"
              isLiked={card % 2}
              likes={11}
              dislikes={1}
              comments={['one', 'two']}
            />
          </Grid>
        ))}
      </Grid>
      <Grid
        justifyContent="flex-end"
        spacing={4}
        container
        style={{ padding: '24px' }}
      >
        <Grid item>
          <Typography>Видео на странице</Typography>
        </Grid>

        <Grid item>
          <ArrowDropDown className={classes.clickable} />
        </Grid>
        <Grid item>
          <Typography>1-5 или 13</Typography>
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
    </div>
  );
}
Gallery.propTypes = {
  classes: PropTypes.object.isRequired,
  owner: PropTypes.bool.isRequired,
};
export default withStyles(styles)(Gallery);
