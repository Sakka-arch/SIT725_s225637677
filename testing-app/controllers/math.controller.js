const { add } = require('../utils/calculator');

function addNumbers(req, res) {
    const a = Number(req.query.a);
    const b = Number(req.query.b);

    if (isNaN(a) || isNaN(b)) {
        return res.status(400).json({ error: "Invalid numbers" });
    }

    const result = add(a, b); // ✅ THIS WAS MISSING

    res.json({ result });
}

module.exports = { addNumbers };