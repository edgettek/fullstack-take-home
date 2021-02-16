import React from "react";
import {CourseSession} from "../../../../../../types/types";

interface Props {
    session: CourseSession
}

export const SessionRow = (props: Props) => {
    const { session } = props;
    const { name, description, content, sessionNumber } = session;

    return (
        <div>
            <h5>{`Session ${sessionNumber}: ${name}`}</h5>
            <span>{description}</span>
            <span>{content}</span>
        </div>
    );
};
