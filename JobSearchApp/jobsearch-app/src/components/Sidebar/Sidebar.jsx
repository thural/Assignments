//import React, { useState } from "react";



const Sidebar = () => {
    // const [isChecked, setIsChecked] = useState(props.todo.completed);

    // const handleOnCheck = () => {
    //     setIsChecked(!isChecked);
    // };


    return (
        <div className="sidebar">
            <h1>JobSearch</h1>
            <div className="menu">
                <div className="menu-button">Elanlar</div>
                <div className="menu-button">Kateqoriyalar</div>
                <div className="menu-button">Sənaye</div>
                <div className="menu-button">Şirkətlər</div>
            </div>
        </div>
    );
};

export { Sidebar };