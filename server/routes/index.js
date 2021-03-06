const express = require("express");

const Admin = require("../controller");

const router = express.Router();

//Users
router.post("/login", Admin.loginUser);
router.post("/register", Admin.registerUser);
// Tasks
router.get("/tasks", Admin.getTasks);
router.post("/tasks", Admin.addTask);
router.put("/tasks/:taskId", Admin.updateTask);
router.delete("/tasks/:taskId", Admin.deleteTask);
router.delete("/tasks/:taskId/complete", Admin.completeTask);

module.exports = router;
