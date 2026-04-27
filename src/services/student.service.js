import { StudentRepository } from "../repositories/student.repository.js"

export const StudentService = {
  getStudentById: async (id) => {
    const student = await StudentRepository.findById(id)

    if (!student) {
      const error = new Error("Student not found")
      error.status = 404
      throw error
    }

    return student
  }
}
