export interface Course {
    id: string,
    name: string,
    description: string,
    courseSections: CourseSection[]
    courseSessions?: CourseSession[]
}

export enum SectionStatus {
    AT_CAPACITY = "AT_CAPACITY",
    START_DATE_PASSED = "START_DATE_PASSED",
    ENROLLED = "ENROLLED",
    OPEN = "OPEN"
}

export interface CourseSection {
    id: number,
    nickname: string,
    startDate: string,
    status: SectionStatus
}

export interface CourseSession {
    id: number,
    sessionNumber: number,
    name: string,
    description: string,
    content: string,
}

export interface User {
    username: string,
    id: number,
    courseSections: CourseSection[]
}

export interface RootState {
    courses: {
        loading: boolean,
        error: any,
        data: Course[]
    }
}
