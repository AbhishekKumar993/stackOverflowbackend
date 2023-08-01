import express from 'express'
import getCurrentPlan from '../utilities/getCurrentPlan.js'
import getNoOfQuestions from '../utilities/getNoOfQuestions.js'

const router = express.Router()

router.post('/getCurrentPlan',getCurrentPlan)
router.post('/getNoOfQuestions',getNoOfQuestions)

export default router