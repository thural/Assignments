//import React, { useState } from "react";



const Job = (props) => {
    // const [isChecked, setIsChecked] = useState(props.todo.completed);

    // const handleOnCheck = () => {
    //     setIsChecked(!isChecked);
    // };


    return (
        <div className="preview">
            <p>{props.job.title}</p>
        </div>
    );
};

export { Job };