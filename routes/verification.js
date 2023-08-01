import express from 'express'
import { generateOTP, verifyOTP } from '../controllers/generateOTP.js'

const router = express.Router()

router.post('/email', generateOTP)
router.post('/otp', verifyOTP)

export default router