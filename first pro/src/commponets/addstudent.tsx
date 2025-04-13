import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { student } from "../utlis/data";
import { useRef, useState } from 'react';
import { addstudent } from '../api/studentapi';

interface Props {
  students: student[],
  setstudent: React.Dispatch<React.SetStateAction<student[]>>
}

function Addstudent(props: Props) {



  const [formdata, setFormdata] = useState({
    name: '',
    email: '',
    class: 0,
    age: 0
  });

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setFormdata({
      ...formdata,
      [event.target.name]: event.target.value
    });

  }

  async function submitstudent() {
    const data= await addstudent(formdata);
    props.setstudent([...props.students, data]);
  

    // Reset form
    setFormdata({
      name: '',
      email: '',
      class: 0,
      age: 0
    });

    
  }


  return (

    <Box
      component="form"
      sx={{ display: 'flex', flexDirection: 'column', gap: 2, marginTop: 5 }}
      noValidate
    >
      <TextField
      name='name'
 onChange={handleChange}
        value={formdata.name}
    
        variant='outlined'
        label="full name"
      />
      <TextField
        name='email'

        onChange={handleChange}
        value={formdata.email}

        variant='outlined'
        label="email"
      />
      <TextField
        name='class'

        onChange={handleChange}
        type="number"
        value={formdata.class}

        variant='outlined'
        label="class"
      />
      <TextField
        name='age'
        onChange={handleChange}
        type="number"
        value={formdata.age}

        variant='outlined'
        label="age"
      />
      <Button onClick={submitstudent} sx={{ backgroundColor: 'green', color: 'white' }} variant="outlined">
        Add
      </Button>
    </Box>

  );
  
}

export default Addstudent;
