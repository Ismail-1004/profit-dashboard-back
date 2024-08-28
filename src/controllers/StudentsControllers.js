import models from "../models/models.js"

class StudentsController {
    async getAllStudents (req, res) {
        try {
            const students = await models.User.findAll()

            if (students.length === 0) {
                return res.json({ message: "У вас нет студентов" })
            }
        
            return res.status(200).json(students)
        } catch (e) {
            throw e
        }
    }

    async createStudents (req, res) {
        try {

        } catch (e) {
            throw e
        }
    }

    async updateStudents (req, res) {
        try {
            const { id, ...updateData } = req.body

            if (!id) {
                return res.status(400).json({ message: 'Передайте ID пользователя!' })
            }
            if (Object.keys(updateData).length === 0) {
                return res.status(400).json({ message: 'Нет данных для обновления!' });
            }

            const student = await models.User.findOne({ where: { id } })

            if (!student) {
                return res.status(404).json({ message: 'Пользователь не найден!' })
            }

            await student.update(updateData);

            return res.status(200).json({ message: 'Данные пользователя обновлены!', student });
        } catch (e) {
            return res.status(500).json({ message: 'Произошла ошибка при обновлении данных!' });
        }
    }

    async deleteStudent (req, res) {
        try {

        } catch (e) {
            throw e
        }
    }
}

export default new StudentsController()