export interface Course {
    id: string,
    name: string,
    description: string,
    courseSections: CourseSection[]
}

export interface CourseSection {
    nickname: string,
    startDate: string,
}

export interface User {
    username: string
}

export interface RootState {
    courses: {
        loading: boolean,
        error: any,
        data: Course[]
    }
}
