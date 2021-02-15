import React, {useEffect, useState} from 'react';
import axiosClient from "../../axiosClient";

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


	return (
		<>
			<h1>Welcome: {user.username} </h1>
			<h2>Courses</h2>
		</>
	);
};
