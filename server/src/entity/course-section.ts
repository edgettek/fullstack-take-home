import {
    Column,
    Entity,
    JoinColumn,
    ManyToMany,
    ManyToOne,
    PrimaryGeneratedColumn,
} from 'typeorm';
import { Course } from './course';
import { User } from './user';

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

    @ManyToMany(() => User)
    users: User[];
}
