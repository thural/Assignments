import { Form } from "react-router-dom";
import { ListItemButton, ListItemText } from "@mui/material";
import { Job } from "./Job";
import { useSelector, useDispatch } from "react-redux";

import { changeId, getData } from '../../redux/reducer';
import { useEffect } from "react";

const Main = (props) => {

    const styledObj = {
        flexDirection: "column",
        alignItems: "flex-start",
        borderBottom: "2px solid green",
        borderTop: "2px solid green"
    }



    const data = useSelector(state => state.data);


    const dispatch = useDispatch();

    // useEffect(() => {
    //     fetch("")
    //         .then(res => res.json())
    //         .then(data => {
    // dispatch(getData(data))
    //         })

    // }, [])


    function handleClick(id) {
        dispatch(changeId(id));
    }


    return (
        <div className="main" style={{ width: "50%" }}>
            <form id="search-form" role="search">
                <input
                    id="q"
                    aria-label="Search contacts"
                    placeholder="Search"
                    type="search"
                    name="q"
                />
                <div
                    id="search-spinner"
                    aria-hidden
                    hidden={true}
                />
                <div
                    className="sr-only"
                    aria-live="polite"
                ></div>
            </form>
            <Form method="post">
                <button type="submit">New</button>
            </Form>
            {data.map((item, i) => (
                <ListItemButton onClick={() => handleClick(item.id)} key={i} component="a" href="#simple-list" style={styledObj}>
                    <h4 style={{ marginBlock: "10px" }}>{item.jobTitle}</h4>
                    <div style={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
                        <ListItemText primary={item.companyName} />
                        <ListItemText primary={item.date} />
                    </div>
                </ListItemButton>
            ))}
        </div>
    );
};

export { Main };