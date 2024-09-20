const { Router } = require("express");
const userRoutes = require("./routerUser");
const eventRoutes = require("./routerEvent");
const router = Router();

router.use('/evento', eventRoutes);
router.use('/participante', userRoutes);


module.exports = router;
