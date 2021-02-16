import {
    Column,
    Entity, JoinTable,
    ManyToMany,
    PrimaryGeneratedColumn
} from "typeorm";
import { CourseSection } from "./course-section";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    username: string;

    @Column()
    email: string;

    @ManyToMany(() => CourseSection, courseSection => courseSection.users)
    @JoinTable()
    courseSections: CourseSection[];
}
