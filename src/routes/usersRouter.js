import Router from "express"
import studentsController from '../controllers/StudentsControllers.js'

const router = Router()

router.get('/', studentsController.getAllStudents)
router.patch('/update', studentsController.updateStudents)

export default router