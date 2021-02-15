export interface Course {
    id: string,
    name: string,
    descriptions: string,
    courseSections: CourseSection[]
}

export interface CourseSection {
    nickname: string
}
