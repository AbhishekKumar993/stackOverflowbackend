import express from 'express'
import searchStackOverflow from '../controllers/searchStackOverflow.js'

const router = express.Router()

router.post('/stackoverflow',searchStackOverflow)

export default router