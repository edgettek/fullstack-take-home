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

    return (
        <div className="section-row-container">
            <h5>{nickname}</h5>
            <div className="right-col">
            <span>{`Start Date: ${dayjs(startDate).format("MMMM D, YYYY")}`}</span>
            <button>Add Course +</button>
            </div>
        </div>
    )
};
