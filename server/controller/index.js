const dbConn = require("../config");
module.exports = class Admin {
  static registerUser(req,res){
    const user = {
      userName: req.body.userName,
      emailId: req.body.emailId,
      password: req.body.password
    }
    dbConn.query("INSERT INTO User SET ?",[user], (err, result, fields) => {
      if (err) {
        console.log(err);
        return res.json({
          success: false,
          error: "Unable to create user",
        });
      }

      user.userId = result.insertId;

      return res.json({
        success: true,
        user,
        message: "User Added Successfully",
      });
    }

    )
  }
  static loginUser(req,res){
     const emailId = req.body.emailId
     const password = req.body.password
    const query = `SELECT * FROM User WHERE emailId = ?;`
    dbConn.query(query ,[emailId], (err, result, fields) => {
      console.log(query)
      if (err) {
        console.log(err);
        return res.json({
          success: false,
          error: "Unable to login user",
        });
      }
      else {
        if(result.length > 0 ){
          if(result[0].password == password) {
            res.json({
              success: true,
              result : result[0],
              message: "Login successfull"
            })
          }
          else {
            res.json({
              success: false,
              message: "Email and password does not exit"

            })
          }
        }
        else {
          res.json({
            success: false,
            message: "Email does not exist"
          })
        }
      }


      // return res.json({
      //   success: true,
      //   user,
      //   message: "User Added Successfully",
      // });
    }

    )
  }
  static getTasks(req, res) {
    dbConn.query(
      "SELECT * FROM Task ORDER BY createdAt DESC",
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
      showInput: req.body.showInput,
      status: req.body.status
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
    const task = {
      taskTitle: req.body.taskTitle,
      showInput: req.body.showInput,
      status: req.body.status
    };
    const taskId = req.params.taskId;
    dbConn.query(
      "UPDATE Task SET  ? WHERE taskId = ?",
      [task, taskId],
      (err, result, fields) => {
        if (err) {
          console.log(err);
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

  static completeTask(req, res) {
    const taskId = req.params.taskId

    dbConn.query(
      "UPDATE Task SET status = 'completed' WHERE taskId = ?",
      [taskId],
      (err, result) => {
        if (err) {
          console.log(err)
          return res.json({
            success: false,
            error: 'Unable to complete task',
          })
        }

        return res.json({
          success: true,
          message: 'Task Completed Sucessfully',
        })
      }
    )
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
