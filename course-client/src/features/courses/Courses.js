import React, {useEffect, useState} from 'react';
import _ from "lodash";
import axiosClient from "../../axiosClient";
import {CourseRow} from "./components/CourseRow/CourseRow";

export const Courses = ({ user }) => {

	const [courses, setCourses] = useState({ loading: true });

	useEffect(() => {
		const fetchCourses = async () => {
			return await axiosClient.get('/courses/');
		};

		fetchCourses().then((response) => {
			setCourses(response.data)
		}).catch((error) => {
			setCourses(error.error)
		});

	}, [setCourses]);

	const { courses: courseList } = courses;

	const courseRows = !_.isEmpty(courseList) ? _.map(courseList, (course) => (<CourseRow course={course}/>)) : null;

	return (
		<>
			<h1>Welcome: {user.username} </h1>
			<h2>Courses</h2>
			{courseRows}
		</>
	);
};
