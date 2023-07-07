const asyncHandler = require('express-async-handler');

const updateUser = (collection) => {
    return asyncHandler(async (req, res) => {
        if (req.query.email !== undefined && req.query.name !== undefined && req.query.lastName !== undefined) {
            const filter = {
                email: req.query.email,
            }
            const updateQuery = {
                $set: {
                    name: req.query.name,
                    lastName: req.query.lastName
                }
            }
            try {
                collection.updateOne(filter, updateQuery).then(() => {
                    res.status(200).send("Account Updated");
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

module.exports = updateUser;