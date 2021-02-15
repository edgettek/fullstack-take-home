import 'reflect-metadata';

import * as bodyParser from 'body-parser';

import express from 'express';
import { createConnection } from 'typeorm';
import { UserRoutes } from './routes/user.routes';
import {CourseRoutes} from "./routes/course.routes";

createConnection().then(async (connection) => {
	const app = express();
	const port = 8080;

	// Middleware
	app.use(bodyParser.json());

	app.use((req, res, next) => {
		res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4000');
		res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
		res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
		next();
	});

	// Routes
	app.use('/api/users', UserRoutes());
	app.use('/api/courses', CourseRoutes());

	app.listen({ port }, () => {
		console.log(`Course server running at http://localhost:${port}`);
	});
});
