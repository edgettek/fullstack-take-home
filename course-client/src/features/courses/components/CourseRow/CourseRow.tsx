import React from 'react';
import _ from "lodash";
import { Course } from "../../../../types/types";

import "./CourseRow.css"
import {SectionRow} from "./SectionRow/SectionRow";

interface Props {
    course: Course
}

export const CourseRow = (props: Props) => {
    const { course } = props;
    const { name, id, description, courseSections: sections } = course;

    const sectionRows = _.map(sections, (section) => (<SectionRow section={section}/>));

    return (
        <div key={id} className="container">
            <h3>{name}</h3>
            <div>{description}</div>
            <div className="section-container">
                <h4>Course Sections</h4>
                {sectionRows}
            </div>
        </div>
    )
};
