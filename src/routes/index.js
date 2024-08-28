import Router from "express"
import usersRouter from './usersRouter.js'

const router = Router()

router.use('/students', usersRouter)

export default router