// Import router from Express
const express = require('express')
const router = express.Router()

// Import models
const Question = require('../models/Question')

router.get('/', async (req, res) => {
    try {
        const questions = await Question.find()
        res.json(questions)
    } catch (error) {
        console.error('Error fetching questions:', error.message)
        res.status(500).send('Internal Server Error')
    }
})

router.post('/generate-paper', async (req, res) => {
    try {
        const { totalMarks, distribution } = req.body
        const paper = await generateQuestionPaper(totalMarks, distribution)
        res.json(paper)
    } catch (error) {
        console.error('Error generating paper:', error.message)
        res.status(500).send('Internal Server Error')
    }
})

const generateQuestionPaper = async (totalMarks, distribution) => {
    try {
        const paper = []
        const questionDistribution = calculateQuestionDistribution(totalMarks, distribution)

        for (const [difficulty, sum] of Object.entries(questionDistribution)) {
            const questions = await getQuestionsByDifficulty(difficulty, sum)
            paper.push(...questions)
        }

        return paper
    } catch (error) {
        throw new Error('Error generating question paper: ' + error.message)
    }
}

const calculateQuestionDistribution = (totalMarks, distribution) => {
    const questionDistribution = {}

    for (const [difficulty, percentage] of Object.entries(distribution)) {
        const count = Math.round((percentage / 100) * totalMarks)
        questionDistribution[difficulty] = count
    }

    return questionDistribution
}

const getQuestionsByDifficulty = async (difficulty, requiredSum) => {
    console.log(difficulty)
    console.log(requiredSum)
    try {
        const questions = await Question.find({ difficulty })

        // Adjust count based on the total marks of fetched questions
        const totalMarks = questions.reduce((sum, q) => sum + q.marks, 0)
        console.log(totalMarks)
        const adjustedSum = Math.min(requiredSum, totalMarks)
        console.log(adjustedSum)

        // Sort questions by marks in ascending order
        questions.sort((a, b) => a.marks < b.marks)

        let count = 0, sum = 0
        for (; count < questions.length; count++) {
            sum += questions[count].marks
            if (sum > adjustedSum) {
                break
            }
        }

        return questions.slice(0, count)
    } catch (error) {
        throw new Error(`Error fetching ${difficulty} questions: ` + error.message)
    }
}

module.exports = router // Export router
