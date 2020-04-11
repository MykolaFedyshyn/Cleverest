import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Character from "./Character";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      paddingLeft: '15px'
    },
    paper: {
      padding: theme.spacing(1),
      textAlign: "center",
      color: theme.palette.text.secondary
    }
  })
);

export default function NestedGrid(gameGrid: any[]) {
  const classes = useStyles();

  function FormRow() {
    return gameGrid.map((row) =>
    (
      <React.Fragment>
        <Grid item xs={2}>
          <Paper className={classes.paper}><Character position={row[0].position}/></Paper>
        </Grid>
        <Grid item xs={1}>
          <Paper className={classes.paper}>{row[1]}</Paper>
        </Grid>
        <Grid item xs={2}>
          <Paper className={classes.paper}><Character position={row[2].position}/></Paper>
        </Grid>
        <Grid item xs={1}>
          <Paper className={classes.paper}>{row[3]}</Paper>
        </Grid>
        <Grid item xs={2}>
        <Paper className={classes.paper}><Character position={row[4].position}/></Paper>
        </Grid>
        <Grid item xs={1}>
          <Paper className={classes.paper}>{row[5]}</Paper>
        </Grid>
        <Grid item xs={'auto'}>
          <Paper className={classes.paper}>{row[6]}</Paper>
        </Grid>
      </React.Fragment>
    )
    );
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid container item xs={12} spacing={1}>
          {FormRow()}
        </Grid>
      </Grid>
    </div>
  );
}
