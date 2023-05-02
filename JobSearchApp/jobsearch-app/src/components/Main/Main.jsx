//import React from "react";
import { Job } from "./Job";

const Main = (props) => {

    return (
        <div className="main">
            {
                // eslint-disable-next-line react/prop-types
                props.jobs.map((job) => (<Job key={job.id} job={job} />))
            }
        </div>
    );
};

export { Main };