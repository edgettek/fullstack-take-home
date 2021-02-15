import React from 'react';
import {CourseSection} from "../../../../../types/types";

interface Props {
    section: CourseSection
}

export const SectionRow = (props: Props) => {

    const { section } = props;
    const { nickname, startDate } = section;

    return (
        <div>
            <h5>{nickname}</h5>
            <div>{`Start Date: ${startDate}`}</div>
            <button>Add Course +</button>
        </div>
    )
};
