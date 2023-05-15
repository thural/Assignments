import Todo from "./Todo";
import List from '@mui/material/List';
import { TodoType } from "../types/types"
import { Link } from "react-router-dom";

const styles = {
    padding: '0',
    overflow: 'auto',
    maxHeight: "100%",
    backgroundColor: "whitesmoke",
    maxWidth: '50vw',
    gridColumn: '1 / 2',
    gridRow: '1 / 4',
    '& a': {
        color: 'inherit'
    }
}

const TodoBoard = ({ todos }: { todos: TodoType[] }) => {
    return (
        <List sx={styles}>
                {
                    todos.map((todo) => (
                        <li>
                            <Link to={`todos/${todo.id}`}>
                                <Todo key={todo.id} todo={todo} />
                            </Link>
                        </li>
                    ))
                }
        </List>
    );
};

export default TodoBoard;