# Take Home Exercise Submission - Kyle Edgette

## To Run Server

Overall, the steps to run the application are the same as the original README:

To set up the server, make sure you're in the `server/` directory.

Run the following:
```bash
docker-compose up -d
yarn
yarn db:run
yarn db:seed
yarn start
```

## To Run Client

To set up the server, make sure you're in the `course-client/` directory.

Run the following:
```bash
yarn && yarn start
```

## To Run Client Tests

Run the following:
```bash
yarn && yarn run test
```

## Notes

No additional dependencies are needed outside those installed by `yarn`.
Overall, I tried to push as much logic for for the status or a given course section (whether it is full, already started, or a user is already enrolled) into the backend, to keep the frontend as simple as possible
I chose to add `redux` to store the data for courses, but in retrospect, it also could have been completed using the Context API.

Potential Improvements:
- Add linting & `prettier` formatting
- Move `@types` and other npm modules into `devDependencies`
- Add additional tests in both frontend and backend (and fix the false positive integration test)
- Add loading and error handling in frontend for `/courses` and `/:userId/enroll/:sectionId` API requests
