const pool = require('../config/dbconfig');

class productDao {
    constructor() {
        this.pool = pool;
    }

    findAll(req, res) {
        let sql = 'SELECT * from products';
        this.pool.query(sql, () => {
            if (error) {
                res.json({
                    "error": true,
                    "message": error
                });
            }
            res.json(rows);
        });
    }
}

module.exports = ProductDao;