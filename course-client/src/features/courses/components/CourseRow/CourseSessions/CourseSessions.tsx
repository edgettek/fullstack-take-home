import React from "react";
import _ from "lodash";
import {CourseSession} from "../../../../../types/types";
import {SessionRow} from "./SessionRow/SessionRow";

import './CourseSessions.css'

interface Props {
    sessions?: CourseSession[]
}

export const CourseSessions = (props: Props) => {
    const { sessions = [] } = props;

    if (_.isEmpty(sessions)) {
        return null;
    }

    const sessionRows = _.map(sessions, (session: CourseSession) => (<SessionRow session={session} key={session.id}/>));

    return (
        <div className="course-sessions-container">
            <h4>Course Sessions</h4>
            {sessionRows}
        </div>
    )
};
