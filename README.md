**AI-Powered Math Exam Generator**

This is a full-stack web application that generates customized math exams for primary school students using the Google Gemini API. The application is built with a Node.js backend and a React frontend, allowing for seamless communication between the client and the AI model.

<u>Features</u>
Dynamic Exam Generation: Users can specify a topic and the number of questions to instantly generate a unique exam paper.

Copy to Clipboard: A convenient button allows users to copy the generated questions with a single click.

Answer Key Option: Users can choose to include a complete answer key with their exam.

Responsive UI: The application is designed to be user-friendly on both desktop and mobile devices.

<u>How to Run the Project Locally</u>
Prerequisites
You need to have Node.js and npm installed on your machine. You can download them from the official Node.js website.

1. Backend Setup
First, navigate to the backend directory and install the necessary Node.js packages.

cd backend
npm install

2. Set Up the Gemini API Key
The application requires a Gemini API key to function.

Go to https://aistudio.google.com/app/apikey to create an API key.

In your backend directory, create a new file named .env.

Add the following line to the .env file, replacing your_key_here with your actual API key:

GEMINI_API_KEY=your_key_here

To prevent this key from being accidentally uploaded to GitHub, ensure you have a .gitignore file in your project's root directory with the line .env in it.

3. Start the Backend Server
From the backend directory, run the following command to start the server:

node server.js

The server will be running on http://localhost:5000.

4. Frontend Setup
Open a <u>new terminal window</u>, navigate to the frontend directory, and install the dependencies.

cd frontend
npm install

5. Start the Frontend Application
From the frontend directory, run the following command to start the React application:

npm start

The application will open in your browser at http://localhost:3000. Your backend and frontend are now connected and ready to go!
