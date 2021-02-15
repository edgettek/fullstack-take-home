import { Course } from '../entity/Course';
import { getRepository } from 'typeorm';

export class CourseService {
    private courseRepository = getRepository(Course);

    async all() {
        return this.courseRepository.find();
    }
}
