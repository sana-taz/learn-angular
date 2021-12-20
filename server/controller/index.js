const dbConn = require("../config");
module.exports = class Admin {
  static getStudents(req, res) {
    dbConn.query(
      "SELECT * FROM student",

      (err, result) => {
        if (err) {
          console.log(err);
          return res.json({
            success: false,
            message: "Unable to get student",
          });
        }
        return res.json({
          success: true,
          students: result,
        });
      }
    );
  }
  static addStudent(req, res) {
    const student = {
      name: req.body.name,
      phone: req.body.phone,
      email: req.body.email
    }
    const check = 'INSERT INTO student SET ?'

    dbConn.query(
      check , [student],
      (err, result, fields) => {
        if (err) {
          console.log(err);
          return res.json({
            success: false,
            error: "Unable to create student",
          });
        }
        console.log(check)
        student.id = result.insertId;

        return res.json({
          success: true,
          student,
          message: "student Added Successfully",
        });
      }
    );
  }

  static updateStudent(req, res) {
    const student = req.body;
    const studentId = req.params.id;
    dbConn.query(
      "UPDATE student SET  ? WHERE id = ?",
      [student, studentId],
      (err, result, fields) => {
        if (err) {
          return res.json({
            success: false,
            error: "Unable to Update student",
          });
        }

        return res.json({
          success: true,
          message: "student Updated Sucessfully",
          student,
        });
      }
    );
  }

  static deleteStudent(req, res) {
    const studentId = req.params.id;
    dbConn.query(
      "DELETE FROM student WHERE id = ?",
      [studentId],
      (err, result, fields) => {
        if (err) {
          console.log(err);
          return res.json({
            success: false,
            error: "Unable to Delete student",
          });
        }

        return res.json({
          success: true,
          message: "student Deleted Successfully",
        });
      }
    );
  }
};
