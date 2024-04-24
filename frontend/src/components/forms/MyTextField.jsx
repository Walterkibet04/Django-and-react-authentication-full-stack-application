import * as React from 'react';
import TextField from '@mui/material/TextField';
import '../../App.css'

export default function MyTextField(props) {
    const {label} = props
  return (
      <TextField 
         id="outlined-basic" 
         label={label}
         variant="outlined" 
         className={'myForm'}
        />
  );
}