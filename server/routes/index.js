const  express  = require("express") ;

const Admin  = require("../controller");

const router = express.Router();

// Users
router.get("/students", Admin.getStudents);
router.post("/students", Admin.addStudent);
router.put("/students/:id", Admin.updateStudent);
router.delete("/students/:id", Admin.deleteStudent);

module.exports = router;
