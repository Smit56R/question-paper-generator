# Question Paper Generator

This is a simple Question Paper Generator application implemented using Node.js, Express.js, and MongoDB.

### Prerequisites

- Node.js and npm installed
- MongoDB installed and running

## Setup

1. Clone the repository:

   ```
   git clone https://github.com/Smit56R/question-paper-generator.git
   cd question-paper-generator
   ```

2. Install Required Packages:

   ```bash
   npm install express mongoose dotenv
   ```

3. Configure the environment variables

   Create a .env file in the root directory and add the following:

   ```
   DATABASE_URL=mongodb://0.0.0.0:27017/

   DATABASE_NAME=myapi
   ```

## Running the Application

1. Start the Node.js server:

   ```bash
   node index.js
   ```

## API Endpoints

- Get all questions: `GET /api/questions`
- Generate question paper: `POST /api/generate-paper`

## Sample Data

You can insert sample data using the provided script. Refer to the script in the project: `insertSampleData.js`.
