import { useState } from "react";
import Box from "@mui/material/Box";
import { styled } from '@mui/system';
import { useLoaderData } from "react-router-dom";
import {getTodo} from "../store/todos";

export async function loader({ params }) {
  const todo = await getTodo(params.todoId);
  return { todo };
}

const StyledBox = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'white',
    borderBottom: '1px solid gray',
    gridColumn: '2 / 3',
    gridRow: '3 / 4',
    width: '100%',
    padding: '0',
    justifyContent: 'center',
    gap: '1rem',
    '& h2': {margin: '3rem'}
});



const TodoDetails = () => {

    const { todo } = useLoaderData();
    const [isChecked, setIsChecked] = useState(todo.completed);

    const handleOnCheck = () => {
        setIsChecked(!isChecked);
    };


    return (
        <StyledBox>
            <h2>{todo.title}</h2>
            <input type="checkbox" checked={isChecked} onClick={handleOnCheck}></input>
        </StyledBox>
    );
};

export default TodoDetails;