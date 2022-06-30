import React, { useState } from 'react';

import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import ReportsTable from 'dan-components/Tables/BorderedTable';
import { withStyles } from '@material-ui/styles';
import {
  ArrowBackIosSharp,
  ArrowDropDown,
  ArrowForwardIosSharp,
  FilterList
} from '@material-ui/icons';
import {
  Checkbox,
  Grid,
  Paper,
  Toolbar,
  Typography,
  FormControlLabel,
  Radio,
  RadioGroup,
  Divider,
} from '@material-ui/core';
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';
import brand from 'dan-api/dummy/brand';
import styles from './reports-jss';

let id = 0;
function createData(itemId, ns, sum, commission, income) {
  id += 1;
  return {
    id,
    itemId,
    ns,
    sum,
    commission,
    income,
  };
}
// import ruLocale from "date-fns/locale/ru";

const data = [
  createData(101, 'Иванова Иван ', 6000, 0.7, 1800),
  createData(18, 'Лисицын Алексей ', 6000, 0.7, 1800),
  createData(141, 'Иванов Иван ', 6000, 0.7, 1800),
  createData(54, 'Семенова Светлана ', 6000, 0.7, 1800),
];

function SalesReport(props) {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const title = brand.name + ' - Blank Page';
  const description = brand.desc;
  const { classes } = props;
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
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
        Эксперты
      </Typography>
      <Divider className={classes.divider} />
      <Paper className={classes.root}>
        <Toolbar className={classes.toolbar}>
          <Grid container>
            <Grid item md={5}>
              <Typography>Диапазон дат</Typography>
              <Grid
                container
                justifyContent="space-between"
                className={classes.dates}
              >
                <Grid item>
                  {/* <div className={classes.picker}> */}
                  <MuiPickersUtilsProvider utils={MomentUtils}>
                    <KeyboardDatePicker
                      clearable
                      label="Uncontrolled input"
                      value={selectedDate}
                      onChange={handleDateChange}
                      animateYearScrolling={false}
                    />
                  </MuiPickersUtilsProvider>
                  {/* </div> */}
                </Grid>
                <Grid item>
                  {/* <div className={classes.picker}> */}
                  <MuiPickersUtilsProvider utils={MomentUtils}>
                    <KeyboardDatePicker
                      clearable
                      label="Uncontrolled input"
                      value={selectedDate}
                      onChange={handleDateChange}
                      animateYearScrolling={false}
                    />
                  </MuiPickersUtilsProvider>
                  {/* </div> */}
                </Grid>
              </Grid>
            </Grid>
            <Grid item md={3}>
              <Typography>Тип контента</Typography>
              <FormControlLabel control={<Checkbox />} label="Трансляция" />
              <br />
              <FormControlLabel control={<Checkbox />} label="Видеочат" />
            </Grid>
            <Grid item md={3}>
              <Typography>Тип отчета</Typography>
              <RadioGroup
                className={classes.group}
                // value={value}
                // onChange={handleChange}
              >
                <FormControlLabel
                  value="sales"
                  control={<Radio />}
                  label="Продажи"
                />
                <FormControlLabel
                  value="balance"
                  control={<Radio />}
                  label="Баланс"
                />
                <FormControlLabel
                  value="requests"
                  control={<Radio />}
                  label="Заявки на вывод средств"
                />
              </RadioGroup>
            </Grid>
            <Grid item container md={1} justifyContent="flex-end">
              <FilterList />
            </Grid>
          </Grid>
        </Toolbar>
        <Paper>
          <ReportsTable data={data} />
          <Grid
            justifyContent="flex-end"
            spacing={4}
            container
            style={{ padding: '24px' }}
          >
            <Grid item>
              <Typography>Доход 9000 руб.</Typography>
            </Grid>
            <Grid item>
              <Typography>Итого 22 500 </Typography>
            </Grid>
            <Grid item>
              <Typography>Строк на стр</Typography>
            </Grid>

            <Grid item>
              <ArrowDropDown />
            </Grid>
            <Grid item>
              <Typography>1-5 или 13</Typography>
            </Grid>
            <Grid item>
              <ArrowBackIosSharp />
            </Grid>
            <Grid item>
              <ArrowForwardIosSharp />
            </Grid>
          </Grid>
        </Paper>
      </Paper>
    </div>
  );
}
SalesReport.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(SalesReport);
