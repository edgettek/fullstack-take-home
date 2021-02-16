import { Router } from 'express';
import _ from "lodash";
import {CourseService} from "../services/course.service";
import dayjs from "dayjs";

// Only 5 users allowed to enroll a single course section
const SECTION_CAPACITY = 5;

enum SectionStatus {
    AT_CAPACITY = "AT_CAPACITY",
    START_DATE_PASSED = "START_DATE_PASSED",
    ENROLLED = "ENROLLED",
    OPEN = "OPEN"
}

const getSectionStatus = (section, userId): SectionStatus => {
    const { users, startDate } = section;

    const isEnrolled = _.some(users, {id: userId});
    if (isEnrolled) {
        return SectionStatus.ENROLLED;
    }

    const startDatePassed = dayjs(startDate).isBefore(dayjs());
    if (startDatePassed) {
        return SectionStatus.START_DATE_PASSED;
    }

    const atCapacity = users.length >= SECTION_CAPACITY;
    if (atCapacity) {
        return SectionStatus.AT_CAPACITY;
    }

    return SectionStatus.OPEN;
};

export const CourseRoutes = () => {
    const router = Router();
    const courseService = new CourseService();

    router.get('/', async (req, res, next) => {
        try {

            // UserId is sent in query parameters because it could be null, is requester is fetching general course data
            const { userId = null } = req.query;

            const parsedUserId = _.isString(userId) ? _.toNumber(userId) : null;

            const courses = await courseService.all();

            const formattedCourses = _.map(courses, (course) => {
                const formattedCourse = {
                    ...course
                };

               const { courseSections } = formattedCourse;

                formattedCourse.courseSections = _.map(courseSections, (section) => {
                   const formattedSection = {
                       ...section,
                       status: getSectionStatus(section, parsedUserId)
                   };

                   // Remove users field, response should not include identifying information about other users
                   delete formattedSection.users;

                   return formattedSection;
                });

                // Sort course sections by start date
                formattedCourse.courseSections = formattedCourse.courseSections.sort((a, b) => dayjs(a.startDate).isAfter(dayjs(b.startDate)) ? 1 : -1);

               const isEnrolledInCourse = _.some(formattedCourse.courseSections, { status: SectionStatus.ENROLLED });

                // If user is not enrolled in any course sections, response should not include any course session data
                if (!isEnrolledInCourse) {
                    delete formattedCourse.courseSessions;
                }

                return formattedCourse;
            });

            res.status(200).json({
                courses: formattedCourses,
            });
            next();
        } catch (err) {
            console.log('ERROR', err)
            res.status(400).json({ message: 'BAD_REQUEST' });
            next();
        }
    });

    return router;
};
