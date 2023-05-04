//import React, { useState } from "react";

import { useSelector } from "react-redux";



const Description = (props) => {
    // const [isChecked, setIsChecked] = useState(props.todo.completed);

    // const handleOnCheck = () => {
    //     setIsChecked(!isChecked);
    // };

    const styledObj = {
        width: "47%",
        borderLeft: "1px solid darkred",
        paddingLeft: "20px"
    }

    const { data, id } = useSelector(state => state);

    return (
        <div className="preview" style={styledObj}>
            <p>{data.filter(item => item.id == id).map((elem, i) => (
                <>
                    <h2 key={i}>{elem.id} {elem.jobTitle}</h2>
                    <p>{elem.description}</p>
                </>
            ))}</p>
        </div>
    );
};

export { Description };