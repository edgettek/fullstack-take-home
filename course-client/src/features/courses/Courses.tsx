import React, { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import _ from "lodash";
import {CourseRow} from "./components/CourseRow/CourseRow";
import {fetchCourses} from "./ducks";
import {RootState, User} from "../../types/types";

interface Props {
	user: User
}

export const Courses = (props: Props) => {
	const { user } = props;
	const { id: userId, username } = user;

	const dispatch = useDispatch();
	const courses = useSelector((state: RootState) =>  {
		return state?.courses?.data || [];
	});

	useEffect(() => {
		dispatch(fetchCourses(userId))
	}, [dispatch]);

	const courseRows = _.map(courses, (course) => (<CourseRow course={course}/>));

	return (
		<>
			<h1>Welcome: {username} </h1>
			<h2>Courses</h2>
			{courseRows}
		</>
	);
};
