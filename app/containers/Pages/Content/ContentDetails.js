import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Slider from 'react-slick';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import AddShoppingCart from '@material-ui/icons/AddShoppingCart';
import Button from '@material-ui/core/Button';
import imgData from 'dan-api/images/imgData';
import imgApi from 'dan-api/images/photos';
import Typography from '@material-ui/core/Typography';
import {
  Avatar, Chip,
  AppBar,
  Divider,
  Tab,
  Tabs,
  Tooltip,
  IconButton,
} from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Type from 'dan-styles/Typography.scss';
import Rating from 'dan-components/Rating/Rating';
import {
  Favorite,
  ThumbDown,
  ThumbUp,
  Share,
  Comment,
  ArrowForwardIosRounded,
} from '@material-ui/icons';
// import ProductDesc from "dan-components/Product/ProductDesc";
import commentData from 'dan-api/apps/commentData';
import Comments from '../../../components/Comments';
import ProductCard from '../../../components/CardPaper/ProductCard';

import 'dan-styles/vendors/slick-carousel/slick-carousel.css';
import 'dan-styles/vendors/slick-carousel/slick.css';
import 'dan-styles/vendors/slick-carousel/slick-theme.css';
import styles from './content-jss.js';

const getThumb = imgData.map((a) => a.thumb);
const liked = true;
const likes = 11;
const dislikes = 1;
const rating = 4;
const comments = [];
function ContentDetail(props) {
  const [qty, setQty] = useState(1);

  const handleQtyChange = (event) => {
    setQty(event.target.value);
  };

  const { classes } = props;

  const settings = {
    infinite: false,
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
      <Typography variant="h4">Волк с Уолл-стрит</Typography>
      <Divider className={classes.divider} />
      <Paper className={classes.rootDetail} elevation={0}>
        <Grid container className={classes.root} spacing={3}>
          <Grid item md={6} sm={12} xs={12}>
            <aside className={classes.imgGallery}>
              <Typography noWrap gutterBottom variant="h5" component="h2">
                Иван Петров 109 просмотров 7 мар 2019 17:00
              </Typography>
              <Rating value={4} max={5} readOnly />
              <div className="container thumb-nav">
                <Slider {...settings}>
                  <div className={classes.item}>
                    <img src={imgApi[27]} alt="" />
                  </div>
                </Slider>
              </div>
              <Grid container justifyContent="space-between">
                <Grid item md={2}>
                  <Avatar className={liked ? classes.liked : classes.favorite}>
                    <Favorite />
                  </Avatar>
                </Grid>
                <Grid
                  item
                  container
                  md={5}
                  justifyContent="flex-end"
                  spacing={1}
                  alignItems="center"
                >
                  <Grid item>
                    <Tooltip title="Like">
                      <Avatar className={classes.greenText} size="small">
                        <ThumbUp />
                      </Avatar>
                    </Tooltip>
                  </Grid>
                  <Grid item>
                    <Typography>{likes}</Typography>
                  </Grid>

                  <Grid item>
                    <Tooltip title="Dislike">
                      <Avatar className={classes.greenText} size="small">
                        <ThumbDown />
                      </Avatar>
                    </Tooltip>
                  </Grid>
                  <Grid>
                    <Typography>{dislikes}</Typography>
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
            </aside>
          </Grid>
          <Grid
            item
            container
            md={6}
            sm={12}
            xs={12}
            justifyContent="space-between"
            direction="vertical"
          >
            <Grid item className={classes.detailWrap}>
              <Typography noWrap gutterBottom variant="h5" component="h2">
                ОПИСАНИЕ
              </Typography>
              <Typography component="p" className={classes.desc}>
                Сюжет фильма "Волк с Уолл-стрит" разворачивается вокруг реальной
                истории брокера Джордана Белфорта, который за короткий срок стал
                миллионером, совершил ряд финансовых преступлений и был
                арестован. Фильм начинается со знаменитого Черного понедельника
                1987 года, когда произошел самый большой рыночный крах
                промышленных акций за всю историю. Незадолго до этого события
                Джордан Белфорт устроился брокером в престижный инвестиционный
                банк. После обвала акций этот банк был закрыт, а Белфорт по
                совету своей жены стал брокером мелкой фирмы и быстро понял, что
                банальное, в какой-то мере мошенническое "впаривание" мелких
                акций случайным клиентам приносит довольно весомые выручки за
                короткие сроки. Вместе со своим партнером Донни, а также еще
                несколькими энергичными друзьями в 1989 году Джордан открывает
                свою собственную внебиржевую брокерскую фирму под названием
                Stratton Oakmont. Компания быстро начинает приносить огромные
                прибыли, и в начале нового десятилетия журнал Forbes
                провозглашает молодого миллионера "волком с Уолл-стрит". -
                Читайте подробнее на FB.ru:
                https://fb.ru/article/468588/volk-s-uoll-strit-otzyivyi-o-filme-syujet-akteryi-glavnyiy-geroy-data-vyihoda
              </Typography>
            </Grid>
            <Grid item container justifyContent="space-between">
              <Grid item container spacing={3} className={classes.tags}>
                <Grid item>
                  <Chip label="ВИДЕОУРОКИ" />
                </Grid>
                <Grid item>
                  <Chip label="ВИДЕОУРОКИ" />
                </Grid>
                <Grid item>
                  <Chip label="ВИДЕОУРОКИ" />
                </Grid>
                <Grid item>
                  <Chip label="ВИДЕОУРОКИ" />
                </Grid>
                <Grid item>
                  <Chip label="ВИДЕОУРОКИ" />
                </Grid>
              </Grid>
              <Grid item className={classes.arrow}>
                <ArrowForwardIosRounded />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
      <Divider className={classes.divider} />
      <Paper>
        <AppBar position="static" color="default">
          <Tabs indicatorColor="primary" variant="fullWidth" value={0}>
            <Tab label="комментарии" fullWidth />
          </Tabs>
        </AppBar>
        <Comments dataList={commentData} />
      </Paper>

      <Typography variant="h6" className={classes.subtitle} gutterBottom>
        Похожие видео
      </Typography>
      <Grid container className={classes.root} spacing={3}>
        {[1, 2, 3].map((card) => (
          <Grid item xl={4} md={6} xs={12}>
            <ProductCard
              thumbnail={imgApi[22]}
              name="Гармония с собой"
              views={109}
              date="7мар 2019 17:00"
              isLiked
              likes={11}
              dislikes={1}
              comments={['one', 'two']}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

ContentDetail.propTypes = {
  classes: PropTypes.object.isRequired,
};

ContentDetail.defaultProps = {
  productIndex: undefined,
};

export default withStyles(styles)(ContentDetail);
