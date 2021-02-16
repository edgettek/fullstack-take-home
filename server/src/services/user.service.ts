import { User } from '../entity/user';
import { getRepository } from 'typeorm';
import {CourseSection} from "../entity/course-section";

export class UserService {
	private userRepository = getRepository(User);
	private courseSectionRepository = getRepository(CourseSection);

	async all() {
		return this.userRepository.find();
	}

	async findOrCreate(newUser: any) {
		const users = await this.userRepository.find({
			where: { email: newUser.email },
			relations: ["courseSections"]
		});
		if (!!users.length) {
			return users[0];
		} else {
			return this.save(newUser);
		}
	}

	async save(user: any) {
		return this.userRepository.save(user);
	}

	async enrollInSection(userId: string, sectionId: string) {
		const user = await this.userRepository.findOne({
			where: { id: userId },
			relations: ["courseSections"]
		});

		const section = await this.courseSectionRepository.findOne({
			where: { id: sectionId },
		});

		if (!section || !user) {
			return;
		}

		user.courseSections.push(section);

		return this.save(user)
	}
}
