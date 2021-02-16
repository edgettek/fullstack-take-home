import React from "react";
import {CourseSession} from "../../../../../../types/types";

import './SessionRow.css'

interface Props {
    session: CourseSession
}

export const SessionRow = (props: Props) => {
    const { session } = props;
    const { name, description, content, sessionNumber } = session;

    return (
        <div>
            <h5>{`Session ${sessionNumber}: ${name}`}</h5>
            <div>{`Description: ${description}`}</div>
            <div className="content-text">{`Content: ${content}`}</div>
        </div>
    );
};
