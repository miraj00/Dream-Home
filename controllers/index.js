const router = require('express').Router();

const apiRoutes = require('./api/');
const homeRoutes = require('./home-routes.js');
const dashboardRoutes = require('./dashboard-routes.js');
const lawyerRoutes = require('./lawyer-routes.js');
const bankRoutes = require('./bank-routes');


router.use('/', homeRoutes);

router.use('/dashboard', dashboardRoutes);
router.use('/api', apiRoutes);

router.use('/lawyer', lawyerRoutes);
router.use('/bank', bankRoutes);

module.exports = router;
