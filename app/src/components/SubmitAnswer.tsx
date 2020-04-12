import React, { useState } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
        color: 'white'
      },
    },
    input: {
        backgroundColor: 'rgba(109,108,150,0.3)',
    },
    button: {
        backgroundColor: theme.palette.success.main,
        width: '130px'
    },
    label: {
        color: 'white'
    }
  }),
);

export default function SubmitAnswer() {
  const classes = useStyles();
  const [inputValue, setInputValue] = useState('');
  const error = /\D/.test(inputValue) ? "Only numbers" : "";

  const logAnswer = () => {
      console.log(inputValue);
  }

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField 
        className={classes.input} 
        id="answer" 
        label="Answer" 
        variant="filled" 
        value={inputValue} 
        onChange={e => setInputValue(e.target.value)} 
        helperText={error}
      />
      <Button variant="contained" color="primary" className={classes.button} onClick={logAnswer}>
        Submit
      </Button>
    </form>
  );
}
