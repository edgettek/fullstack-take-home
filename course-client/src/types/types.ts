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
