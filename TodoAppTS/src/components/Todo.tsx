import Box from "@mui/material/Box";
import { styled } from '@mui/system';
import { TodoType } from "../types/types";

const StyledBox = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '1rem',
    backgroundColor: 'white',
    padding: '0 1rem',
    borderBottom: '1px solid gray',
});



const Todo = ({todo}: {todo: TodoType}) => {



    return (
        <StyledBox>
            <p>{todo.title}</p>
        </StyledBox>
    );
};

export default Todo;