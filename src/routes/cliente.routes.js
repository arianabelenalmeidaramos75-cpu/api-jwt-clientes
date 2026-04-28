const router = require("express").Router();
const ctrl = require("../controllers/cliente.controller");
const auth = require("../middlewares/auth");

router.get("/", auth, ctrl.getAll);
router.get("/:id", auth, ctrl.getById);
router.post("/", auth, ctrl.create);
router.put("/:id", auth, ctrl.update);
router.delete("/:id", auth, ctrl.delete);

module.exports = router;