import { Router } from 'express';
import { UserService } from '../services/user.service';

export const UserRoutes = () => {
	const router = Router();
	const userService = new UserService();

	router.post('/login', async (req, res, next) => {
		try {
			const user = await userService.findOrCreate(req.body);
			res.status(200).json({
				user,
			});
			next();
		} catch (err) {
			res.status(400).json({ message: 'BAD_REQUEST' });
			next();
		}
	});

	router.post('/:userId/enroll/:sectionId', async (req, res, next) => {
		try {
			const { userId, sectionId } = req.params;

			await userService.enrollInSection(userId, sectionId);

			res.status(204).json({});
			next();
		} catch (err) {
			res.status(400).json({ message: 'BAD_REQUEST' });
			next();
		}
	});

	return router;
};
