const { Router } = require("express");
const EventController = require("../controller/EventController");
const UserController = require("../controller/UserController");
const router = Router();

router.post("/", (req, res) => {
    EventController.create(req, res);
});

router.get("/", (req, res) => {
    EventController.getAll(req, res);
});

router.delete("/:id", (req, res) => {
    EventController.delete(req, res);
});

router.put("/:id", (req, res) => {
    EventController.update(req, res);
});

router.get("/:id", (req, res) => {
    EventController.getOne(req, res);
});
router.get("/:id/participante", (req, res) => {
    UserController.getAllParticipantes(req, res);
});

module.exports = router;