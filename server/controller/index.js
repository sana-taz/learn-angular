const dbConn = require("../config");
module.exports = class Admin {
  static getTasks(req, res) {
    dbConn.query(
      "SELECT * FROM TAsk",
      (err, result) => {
        if (err) {
          console.log(err);
          return res.json({
            success: false,
            message: "Unable to get tasks",
          });
        }
        return res.json({
          success: true,
          tasks: result,
        });
      }
    );
  }
  static addTask(req, res) {
    const task = {
      taskTitle: req.body.taskTitle,
      showInput: req.body.showInput
    };
    const query = "INSERT INTO Task SET ?";

    dbConn.query(query, [task], (err, result, fields) => {
      if (err) {
        console.log(err);
        return res.json({
          success: false,
          error: "Unable to create task",
        });
      }

      task.taskId = result.insertId;

      return res.json({
        success: true,
        task,
        message: "Task Added Successfully",
      });
    });
  }

  static updateTask(req, res) {
    const task = req.body;
    const taskId = req.params.taskId;
    dbConn.query(
      "UPDATE Task SET  ? WHERE taskId = ?",
      [task, taskId],
      (err, result, fields) => {
        if (err) {
          return res.json({
            success: false,
            error: "Unable to Update task",
          });
        }

        return res.json({
          success: true,
          message: "Task Updated Sucessfully",
          task,
        });
      }
    );
  }

  static deleteTask(req, res) {
    const taskId = req.params.taskId;
    dbConn.query(
      "DELETE FROM Task WHERE taskId = ?",
      [taskId],
      (err, result, fields) => {
        if (err) {
          console.log(err);
          return res.json({
            success: false,
            error: "Unable to Delete task",
          });
        }

        return res.json({
          success: true,
          message: "Task Deleted Successfully",
        });
      }
    );
  }
};
