# Quiz

A multiple choice quiz application where users can answer questions one by one, navigate to previously answered questions, and manage the quiz state using React, Redux, and React Router.

## Project setup

1. Clone the repository from [git@github.com:bradley-owens/quiz.git]
2. Navigate to the project directory and run `npm install` to install the dependencies.
3. Run `npm start` to start the development server and visit `http://localhost:3000` in your browser.

## Functionality

- The application retrieves a set of multiple choice questions from an API and presents them to the user, one by one.
- The user is required to answer each question before proceeding to the next.
- The quiz state is managed with the help of Redux.
- Navigation between questions is made possible with the integration of React Router.
- A user-friendly question navigator has been included, allowing for quick access to previously answered questions with just a click.

## Available Scripts

- `npm start`: starts the development server
- `npm test`: runs the test suite
- `npm run build`: builds the application for production

## Tech Stack

- React: a JavaScript library for building user interfaces.
- Redux: State management using Redux Toolkit for efficient and streamlined data management
- React Router: Utilizing the React Router library for seamless navigation
- Fetch: Fetches quiz data and results from an API

## Challenges

Some challenges that were encountered while making this project include:

- Managing the quiz state with Redux and ensuring consistency throughout the application.
- Implementing a navigation system that allows users to easily access previously answered questions.
- Keeping track of whether a user has already answered a question and whether they got it right or wrong and updating the score accordingly.

## Contributing

- If you find a bug or have an idea for a feature, please open an issue.
- Pull requests are always welcome.
