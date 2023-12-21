const express = require('express');
const router = express.Router();

// ??? List of quotes
let quoteList = []; // FIXED BUG 5

// ??? GET request returns information - FIXED BUG 4
router.get('/', (req, res) => {
    console.log('GET Request made for /quotes');
    // Send back the list of quotes!
    res.send(quoteList);
});

// ??? POST request save user input  - FIXED BUG 7
router.post('/', (req, res) => {
    console.log('POST Request made for /quotes');
    // Any data we send from the client is available
    // as a property of req.body.
    console.log(req.body);
    let quoteToAdd = req.body;
    quoteList.push(quoteToAdd);
    res.sendStatus(201);
});

// PUT request update information

// ??? - FIXED (Bug 1)
module.exports = router;