import './App.css';

import React, { useContext } from 'react';
import withUser, { UserContext } from './features/hoc/withUser';

import { Courses } from './features/courses/Courses';
import { Login } from './features/login/Login';

function App() {
	const { user } = useContext(UserContext);
	return (
		<div className='App'>
			{!!user ? <Courses user={user} /> : <Login />}
		</div>
	);
}

export default withUser(App);
