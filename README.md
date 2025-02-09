# quiz-app


## Project Overview
The Quiz App is a web-based quiz platform where users can answer multiple-choice questions, track their score, and view results at the end. It includes features such as a timer, a scoreboard, and an interactive UI for better engagement.

## Features
- Fetches quiz questions from a backend server.
- Timer for each question to ensure a time-bound quiz experience.
- Scoreboard to keep track of users' scores.
- Displays correct answers at the end of the quiz.
- Clean and user-friendly UI.

## Why Use a Backend?
Instead of directly fetching the quiz data from the API endpoint, we are using a backend server because the direct API request was blocked due to CORS (Cross-Origin Resource Sharing) restrictions. To overcome this, we implemented a backend that fetches data from the API and serves it to the frontend without CORS issues.

## Tech Stack
- **Frontend:** React, TailwindCSS
- **Backend:** Node.js, Express
- **Database:** MongoDB (if required for storing questions)

## Setup Instructions

### Prerequisites
Ensure you have the following installed:
- Node.js & npm
- MongoDB (if required)

### Backend Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/manideepyelugam/quiz-app.git
   cd quiz-app/backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the backend server:
   ```bash
   npm start
   ```
   The backend will run on `http://localhost:2000/`

### Frontend Setup
1. Navigate to the frontend folder:
   ```bash
   cd ../frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the React application:
   ```bash
   npm run dev
   ```
   The frontend will be accessible at `http://localhost:5173/`

## API Endpoints
- `GET /api/questions` - Fetches quiz questions.

## Contributing
Feel free to fork this repository and contribute by submitting a pull request!

## License
This project is licensed under the MIT License.

