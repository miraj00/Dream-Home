const router = require('express').Router();

const apiRoutes = require('./api/');
const homeRoutes = require('./home-routes.js');
const dashboardRoutes = require('./dashboard-routes.js');
const lawyerRoutes = require('./lawyer-routes.js');
// const forSaleRoute = require('./forsale-routes.js')

router.use('/', homeRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/api', apiRoutes);
router.use('/lawyer', lawyerRoutes)
// router.use('/forsale', forSaleRoute);


module.exports = router;
