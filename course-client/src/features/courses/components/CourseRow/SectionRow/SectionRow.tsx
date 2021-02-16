import React, {MouseEvent, useContext} from 'react';
import dayjs from 'dayjs'
import {CourseSection, SectionStatus} from "../../../../../types/types";
import {UserContext} from "../../../../hoc/withUser";
import {useDispatch} from "react-redux";
import {fetchCourses} from "../../../ducks";
import axiosClient from "../../../../../axiosClient";

import "./SectionRow.css"

interface Props {
    section: CourseSection
}

const getButtonLabel = (status: SectionStatus): string => {
    switch (status) {
        case SectionStatus.AT_CAPACITY:
            return "Section Is Full";
        case SectionStatus.START_DATE_PASSED:
            return "Start Date Passed";
        case SectionStatus.ENROLLED:
            return "Enrolled!";
        case SectionStatus.OPEN:
            return "Add Course +";
        default:
            return "Add Course +";
    }
};

export const SectionRow = (props: Props) => {
    const { section } = props;
    const { nickname, status, startDate, id: sectionId } = section;

    const dispatch = useDispatch();
    const { user } = useContext(UserContext);

    // @ts-ignore
    const { id: userId } = user;

    const buttonLabel = getButtonLabel(status);
    const isButtonDisabled = status !== SectionStatus.OPEN;

    const handleButtonClick = (event: MouseEvent) => {
        event.stopPropagation();

        axiosClient.post(`/users/${userId}/enroll/${sectionId}`).then(() => {
            // If request succeeds, re-fetch course data to get course content for enrolled course
            dispatch(fetchCourses(userId))
        })
    };

    return (
        <div className="section-row-container">
            <h5>{nickname}</h5>
            <div>
                <span>{`Start Date: ${dayjs(startDate).format("MMMM D, YYYY")}`}</span>
                <button disabled={isButtonDisabled} onClick={handleButtonClick}>{buttonLabel}</button>
            </div>
        </div>
    )
};
