const daoClass = require('../../dao/productDao');
const dao = new daoClass();

const express = require('express');
const router = express.Router();

// Find One Product Route -> /api/products/
router.get('/', (req, res) => {
    dao.findAll(req, res);
});

// Find One Product Route -> /api/products/:id
router.get('/:id', (req, res) => {
    doa.findOne(req, res, req.params.id);
});

module.exports = router;