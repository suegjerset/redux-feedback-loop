const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

// POST feedback to database
router.post('/', (req, res) => {
    console.log('in /feedback POST', req.body);
    let queryString = `
    INSERT INTO "feedback" ("feeling", "understanding", "support", "comments") 
    VALUES ($1, $2, $3, $4);`;
    // go to dbase, run query and send back status
    pool.query(queryString, 
        [req.body.feeling, req.body.understanding, req.body.support, req.body.comments])
        .then((result) => {
            res.sendStatus( 201 );
        }).catch((error) => {
            console.log(error);
            res.sendStatus( 500 );
        })
}) // end POST

module.exports = router;