import React, { useState } from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles(
    {
        todo: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
            backgroundColor: 'antiquewhite',
            padding: '0 1rem',
            border: '3px solid gray',
            borderRadius: '1em',
            margin: '.3rem'
        }
    }
);



const Todo = (props) => {
    const [isChecked, setIsChecked] = useState(props.todo.completed);

    const handleOnCheck = () => {
        setIsChecked(!isChecked);
    };

    const classes = useStyles();


    return (
        <div className={classes.todo}>
            <p>{props.todo.title}</p>
            <input type="checkbox" checked={isChecked} onClick={handleOnCheck}></input>
        </div>
    );
};

export { Todo };