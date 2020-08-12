import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Card from './Card';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
}));

export default function Cards({ animals }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container direction="row" spacing={3}>
        {animals.map((animal) => (
          <Grid item xs={4}>
            <Paper elevation={3}>
              <Card key={animal.id} {...animal} />
            </Paper>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
