import React from 'react';
import PropTypes from 'prop-types';
import {
  withStyles,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Grid,
} from '@material-ui/core';
import Toolbar from '@material-ui/core/Toolbar';
import classNames from 'classnames';
// import Typography from "@material-ui/core/Typography";
// import Table from "@material-ui/core/Table";
// import TableBody from "@material-ui/core/TableBody";
// import TableCell from "@material-ui/core/TableCell";
// import TableHead from "@material-ui/core/TableHead";
// import TableRow from "@material-ui/core/TableRow";
import styles from 'dan-components/Tables/tableStyle-jss';
import { ArrowDownward, FilterList } from '@material-ui/icons';
// import { Grid } from "@material-ui/core";
import SearchUi from '../Search/SearchUi';

function ReportsTable(props) {
  const { classes, data } = props;

  return (
    <div className={classes.rootTable}>
      <Toolbar className={classes.toolbar}>
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item md={3} xs={12} className={classes.title}>
            <Typography variant="h6">Продажи</Typography>
          </Grid>
          <Grid
            item
            container
            md={5}
            xs={12}
            justifyContent="flex-end"
            alignItems="center"
          >
            <Grid item>
              <SearchUi />
            </Grid>
            <Grid item>
              <FilterList />
            </Grid>
          </Grid>
        </Grid>
      </Toolbar>
      <Table className={classNames(classes.table, classes.bordered)}>
        <TableHead>
          <TableRow>
            <TableCell padding="normal">
              id, дата
              <ArrowDownward />
            </TableCell>
            <TableCell align="right">
              <ArrowDownward />
              ФИО
            </TableCell>
            <TableCell align="right">
              <ArrowDownward />
              Сумма
            </TableCell>
            <TableCell align="right">
              <ArrowDownward />
              Комиссия
            </TableCell>
            <TableCell align="right">
              <ArrowDownward />
              Доход
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((n) => [
            <TableRow key={n.id}>
              <TableCell padding="normal">{n.itemId}</TableCell>
              <TableCell align="right">{n.ns}</TableCell>
              <TableCell align="right">{n.sum}</TableCell>
              <TableCell align="right">{n.commission}</TableCell>
              <TableCell align="right">{n.income}</TableCell>
            </TableRow>,
          ])}
        </TableBody>
      </Table>
    </div>
  );
}

ReportsTable.propTypes = {
  classes: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
};

export default withStyles(styles)(ReportsTable);
