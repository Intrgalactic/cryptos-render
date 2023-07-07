const asyncHandler = require('express-async-handler');

const createUser = (collection) => {
    return asyncHandler(async (req, res) => {
        const userData = {
            name: req.query.name,
            lastName: req.query.lastName,
            email: req.query.email,
        }
        if (userData.name !== undefined && userData.lastName !== undefined && userData.email !== undefined) {
            try {
                collection.insertOne(userData).then(() => {
                    res.status(201).send("Account Created");
                });
            }
            catch (err) {
                res.status(500).send(err);
            }
        }
        else {
            res.sendStatus(400);
        }
    })
}

module.exports = createUser;