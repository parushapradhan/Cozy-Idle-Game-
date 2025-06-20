const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.get("/admin", userController.adminPanel);
router.get("/admin", userController.verifyUser);
router.post("/admin/delete-user", userController.deleteUser);
router.post("/admin/remove-task", userController.removeTask);
router.post("/admin/update-level", userController.updateLevel);
router.post("/admin/reset-settings", userController.resetSettings);
router.post("/admin/force-reset-password", userController.forceResetPassword);
module.exports = router;
