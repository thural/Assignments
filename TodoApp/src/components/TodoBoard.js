import React from "react";
import { createUseStyles } from "react-jss";
import { Todo } from "./Todo";

const useStyles = createUseStyles(
    {
        todo_board: {
            margin: 'auto',
            display: 'grid',
            justifyContent: 'center',
            overflow: 'auto',
            maxHeight: "100%"
        }
    }
);



const TodoBoard = (props) => {

    const classes = useStyles();


    return (
        <div className={classes.todo_board}>
            {
                props.todos.map((todo) => (<Todo key={todo.id} todo={todo} />))
            }
        </div>
    );
};

export { TodoBoard };