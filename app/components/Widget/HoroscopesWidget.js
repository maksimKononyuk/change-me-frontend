import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import CircularProgress from '@material-ui/core/CircularProgress';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import imgData from 'dan-api/images/imgData';
import styles from './widget-jss';
import PapperBlock from '../PapperBlock/PapperBlock';

function HoroscopesWidget(props) {
  const { classes } = props;
  return (
    <Grid container spacing={3}>
      <Grid item md={4} sm={12} xs={12}>
        <PapperBlock
          title="Игра гадание"
          icon="ion-ios-cloud-outline"
          whiteBg
          desc=""
        >
          <div className={classes.albumRoot}>
            <ImageList rowHeight={120} className={classes.gridList}>
              {imgData.map((tile, index) => {
                if (index >= 4) {
                  return false;
                }
                return (
                  <ImageListItem key={index.toString()}>
                    <img
                      src={tile.img}
                      className={classes.img}
                      alt={tile.title}
                    />
                    <ImageListItemBar
                      title=""
                      subtitle=""
                      actionIcon={
                        <IconButton className={classes.icon}>
                          <InfoIcon />
                        </IconButton>
                      }
                    />
                  </ImageListItem>
                );
              })}
            </ImageList>
          </div>
          <Divider className={classes.divider} />
          <Grid container justifyContent="center">
            <Button
              color="secondary"
              variant="contained"
              className={classes.button}
            >
              Сыграть в игру
            </Button>
          </Grid>
        </PapperBlock>
      </Grid>
      <Grid item md={4} sm={12} xs={12}>
        <PapperBlock
          title="Гороскоп дня"
          icon="ion-ios-images-outline"
          whiteBg
          desc=""
        >
          <div className={classes.albumRoot}>
            <ImageList rowHeight={120} className={classes.gridList}>
              {imgData.map((tile, index) => {
                if (index >= 4 && index < 8) {
                  return (
                    <ImageListItem key={index.toString()}>
                      <img
                        src={tile.img}
                        className={classes.img}
                        alt={tile.title}
                      />
                      <ImageListItemBar
                        title={tile.title}
                        subtitle={
                          <span>
                            by:&nbsp;
                            {tile.author}
                          </span>
                        }
                        actionIcon={
                          <IconButton className={classes.icon}>
                            <InfoIcon />
                          </IconButton>
                        }
                      />
                    </ImageListItem>
                  );
                }
                return false;
              })}
            </ImageList>
          </div>
          <Divider className={classes.divider} />
          <Grid container justifyContent="center">
            <Button
              color="secondary"
              variant="contained"
              className={classes.button}
            >
              Сыграть в игру
            </Button>
          </Grid>
        </PapperBlock>
      </Grid>
      <Grid item md={4} sm={12} xs={12}>
        <PapperBlock
          title="Гороскоп дня"
          icon="ion-ios-images-outline"
          whiteBg
          desc=""
        >
          <div className={classes.albumRoot}>
            <ImageList rowHeight={120} className={classes.gridList}>
              {imgData.map((tile, index) => {
                if (index >= 4 && index < 8) {
                  return (
                    <ImageListItem key={index.toString()}>
                      <img
                        src={tile.img}
                        className={classes.img}
                        alt={tile.title}
                      />
                      <ImageListItemBar
                        title={tile.title}
                        subtitle={
                          <span>
                            by:&nbsp;
                            {tile.author}
                          </span>
                        }
                        actionIcon={
                          <IconButton className={classes.icon}>
                            <InfoIcon />
                          </IconButton>
                        }
                      />
                    </ImageListItem>
                  );
                }
                return false;
              })}
            </ImageList>
          </div>
          <Divider className={classes.divider} />
          <Grid container justifyContent="center">
            <Button color="secondary" className={classes.button}>
              Получить гороскоп бесплатно
            </Button>
          </Grid>
        </PapperBlock>
      </Grid>
      <Grid item md={4} sm={12} xs={12}>
        <PapperBlock
          title="Гороскоп рождения"
          icon="ion-ios-heart-outline"
          whiteBg
          desc=""
        >
          <div className={classes.albumRoot}>
            <ImageList rowHeight={120} className={classes.gridList}>
              {imgData.map((tile, index) => {
                if (index >= 8 && index < 12) {
                  return (
                    <ImageListItem key={index.toString()}>
                      <img
                        src={tile.img}
                        className={classes.img}
                        alt={tile.title}
                      />
                      <ImageListItemBar
                        title={tile.title}
                        subtitle={
                          <span>
                            by:&nbsp;
                            {tile.author}
                          </span>
                        }
                        actionIcon={
                          <IconButton className={classes.icon}>
                            <InfoIcon />
                          </IconButton>
                        }
                      />
                    </ImageListItem>
                  );
                }
                return false;
              })}
            </ImageList>
          </div>
          <Divider className={classes.divider} />
          <Grid container justifyContent="center">
            <Button color="secondary" className={classes.button}>
              Получить гороскоп бесплатно
            </Button>
          </Grid>
        </PapperBlock>
      </Grid>
    </Grid>
  );
}

HoroscopesWidget.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HoroscopesWidget);
