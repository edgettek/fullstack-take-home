import {
	Column,
	Entity,
	JoinColumn,
	ManyToOne,
	PrimaryGeneratedColumn,
} from 'typeorm';

import { Course } from './course';

@Entity()
export class CourseSection {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	nickname: string;

	@Column()
	startDate: Date;

	@Column()
	courseId: number;

	@ManyToOne(() => Course)
	@JoinColumn()
	course: Course;
}
