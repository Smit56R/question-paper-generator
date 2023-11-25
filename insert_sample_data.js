// Import custom .env file
require('dotenv').config()

const mongoose = require('mongoose')
const Question = require('./models/Question')

// Connect to MongoDB
mongoose.connect(`${process.env.DATABASE_URL}${process.env.DATABASE_NAME}`, {
    useNewUrlParser: true
})
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to Database'))

// Sample data
const sampleQuestions = [
    { question: 'What is the speed of light?', subject: 'Physics', topic: 'Waves', difficulty: 'Easy', marks: 5 },
    { question: 'Describe the process of photosynthesis.', subject: 'Biology', topic: 'Ecology', difficulty: 'Medium', marks: 10 },
    { question: 'Solve for x: 2x + 5 = 15', subject: 'Mathematics', topic: 'Algebra', difficulty: 'Medium', marks: 8 },
    { question: 'Who wrote "To Kill a Mockingbird"?', subject: 'Literature', topic: 'American Literature', difficulty: 'Hard', marks: 12 },
    { question: 'What is the capital of France?', subject: 'Geography', topic: 'European Capitals', difficulty: 'Easy', marks: 7 },
    { question: 'Explain the laws of thermodynamics.', subject: 'Physics', topic: 'Thermodynamics', difficulty: 'Hard', marks: 15 },
    { question: 'List the major components of a cell.', subject: 'Biology', topic: 'Cell Biology', difficulty: 'Medium', marks: 9 },
    { question: 'Simplify: (3x + 2) - (x - 5)', subject: 'Mathematics', topic: 'Algebra', difficulty: 'Easy', marks: 6 },
    { question: 'Who discovered penicillin?', subject: 'Science', topic: 'Medicine', difficulty: 'Medium', marks: 11 },
    { question: 'Name three Shakespearean plays.', subject: 'Literature', topic: 'Shakespeare', difficulty: 'Hard', marks: 14 },
    { question: 'What are the main functions of the liver?', subject: 'Biology', topic: 'Anatomy', difficulty: 'Medium', marks: 10 },
    { question: 'Solve the quadratic equation: x^2 - 4x + 4 = 0', subject: 'Mathematics', topic: 'Algebra', difficulty: 'Hard', marks: 13 },
    { question: 'Who painted the Mona Lisa?', subject: 'Art', topic: 'Renaissance Art', difficulty: 'Easy', marks: 8 },
    { question: 'Define the concept of gravity.', subject: 'Physics', topic: 'Gravity', difficulty: 'Medium', marks: 9 },
    { question: 'Discuss the impact of industrialization on society.', subject: 'History', topic: 'Industrial Revolution', difficulty: 'Hard', marks: 12 },
    { question: 'Differentiate between a herb and a shrub.', subject: 'Biology', topic: 'Botany', difficulty: 'Easy', marks: 5 },
    { question: 'What is the Pythagorean theorem?', subject: 'Mathematics', topic: 'Geometry', difficulty: 'Medium', marks: 10 },
    { question: 'Who wrote "1984"?', subject: 'Literature', topic: 'Dystopian Fiction', difficulty: 'Hard', marks: 11 },
    { question: 'Explain the concept of supply and demand.', subject: 'Economics', topic: 'Microeconomics', difficulty: 'Medium', marks: 9 },
    { question: 'Identify the layers of the Earth\'s atmosphere.', subject: 'Geography', topic: 'Atmosphere', difficulty: 'Easy', marks: 7 },
]

// Function to insert sample questions
const insertSampleQuestions = async () => {
    try {
        await Question.deleteMany() // Clear existing data

        // Insert sample questions
        const insertedQuestions = await Question.insertMany(sampleQuestions)
        console.log('Sample questions inserted successfully:', insertedQuestions)
    } catch (error) {
        console.error('Error inserting sample questions:', error.message)
    } finally {
        // Disconnect from MongoDB
        mongoose.disconnect()
    }
}

// Run the script
insertSampleQuestions()
