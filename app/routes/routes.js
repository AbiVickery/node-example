const espress = require('express');
const router = express.Router();

// /api/products
router.use('/products', require('./api/productRoutes'));

// /api/pages
// router.use('/pages', require('./api/pageRoutes'));

// /api/contacts
// router.use('/contacts', require('./api/contactsRoutes'));


module.exports = router;