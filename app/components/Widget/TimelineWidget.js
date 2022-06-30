import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import PapperBlock from '../PapperBlock/PapperBlock';
import styles from './widget-jss';

const dataTimeline = [
  {
    time: '11:20',
    title: 'Оплата консультации',
    desc: 'Оплата картой, 3000руб., чек',
  },
  {
    time: 'Вчера',
    title: 'Оплата консультации',
    desc: 'Оплата картой, 3000руб., чек',
  },
  {
    time: 'Вчера',
    title: 'Оплата консультации',
    desc: 'Оплата картой 500р., чек',
  },
  {
    time: '11 Oct 2018',
    title: 'Оплата консультации',
    desc: 'Оплата картой 500р., чек',
  },
  {
    time: 'Прошлая неделя',
    title: 'Оплата консультации',
    desc: 'Оплата картой, 3000руб., чек',
  },
];

function TimelineWidget(props) {
  const { classes } = props;
  return (
    <PapperBlock
      whiteBg
      noMargin
      title="История оплат"
      icon="ion-ios-time-outline"
      desc=""
    >
      <div className={classes.activityWrap}>
        <List>
          {dataTimeline.map((item, index) => (
            <ListItem key={index.toString()} className={classes.activityList}>
              <ListItemIcon>
                <div className={classes.timeDot}>
                  <time>{item.time}</time>
                  <span />
                </div>
              </ListItemIcon>
              <ListItemText
                primary={item.title}
                className={classes.activityText}
                secondary={item.desc}
              />
            </ListItem>
          ))}
        </List>
      </div>
    </PapperBlock>
  );
}

TimelineWidget.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TimelineWidget);
