import { Course } from '../entity/course';
import { getRepository } from 'typeorm';

export class CourseService {
    private courseRepository = getRepository(Course);

    async all() {
        return this.courseRepository.find({ relations: ["courseSections", "courseSections.users", "courseSessions"] });
    }
}
