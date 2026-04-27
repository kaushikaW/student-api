import { StudentService } from "../services/student.service.js"

export const getStudent = async (req, res, next) => {
  try {
    const { id } = req.params
    const student = await StudentService.getStudentById(id)
    res.json(student)
  } catch (err) {
    next(err)
  }
}
