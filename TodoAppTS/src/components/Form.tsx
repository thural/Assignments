import Button from '@mui/material/Button';
import Input from '@mui/material/Input';
import Box from '@mui/material/Box';
import { styled } from '@mui/system';

const StyledBox = styled(Box)({
    display: 'flex',
    gap: '1rem',
    height: '2.5rem',
    border: 'none',
    width: '90%'
});

const StyledInput = styled(Input)({
    margin: '0',
    width: '-webkit-fill-available',
    padding: '10px',
    color: 'black',
    border: 'none',
    borderRadius: '6px',
    backgroundColor: 'whitesmoke',
    gridColumn: '2 / 3',
});


const TaskForm = ({ handleForm }: {handleForm: any}) => {
   return (

      <StyledBox component="form" onSubmit={(event: any) => handleForm(event)}>
         <StyledInput type='input' name='task' placeholder='write a task name' required></StyledInput>
         <Button type="submit" variant="contained" color="primary">Add</Button>
      </StyledBox>

   );
};

export default TaskForm;