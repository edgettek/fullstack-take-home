import React from 'react';
import dayjs from 'dayjs'
import {CourseSection} from "../../../../../types/types";

import "./SectionRow.css"

interface Props {
    section: CourseSection
}

export const SectionRow = (props: Props) => {

    const { section } = props;
    const { nickname, startDate } = section;

    const hasCourseStarted = dayjs(startDate).isBefore(dayjs());

    const buttonLabel = hasCourseStarted ? "Start Date Passed" : "Add Course +";

    return (
        <div className="section-row-container">
            <h5>{nickname}</h5>
            <div>
                <span>{`Start Date: ${dayjs(startDate).format("MMMM D, YYYY")}`}</span>
                <button disabled={hasCourseStarted}>{buttonLabel}</button>
            </div>
        </div>
    )
};
