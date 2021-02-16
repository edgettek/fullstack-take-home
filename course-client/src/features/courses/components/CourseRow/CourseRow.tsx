import React from 'react';
import _ from "lodash";
import { Course } from "../../../../types/types";
import {SectionRow} from "./SectionRow/SectionRow";
import {CourseSessions} from "./CourseSessions/CourseSessions";

import "./CourseRow.css"

interface Props {
    course: Course
}

export const CourseRow = (props: Props) => {
    const { course } = props;
    const { name, id, description, courseSections, courseSessions } = course;

    const sectionRows = _.map(courseSections, (section) => (<SectionRow section={section}/>));

    return (
        <div key={id} className="container">
            <h3>{name}</h3>
            <div>{description}</div>
            <CourseSessions sessions={courseSessions}/>
            <div className="section-container">
                <h4>Course Sections</h4>
                {sectionRows}
            </div>
        </div>
    )
};
