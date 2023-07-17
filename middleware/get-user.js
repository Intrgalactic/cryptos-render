const asyncHandler = require('express-async-handler');

const getUser = (collection) => {
    return asyncHandler(async (req, res) => {
        const query = { email: req.query.email }
        try {
            const user = await collection.findOne(query);
            if (user === null) {
                res.status(404).send("Account Not Found");
            }
            else {
                res.status(200).send({
                    name: user.name,
                    lastName: user.lastName,
                    email: user.email
                });
            }
        }
        catch (err) {
            res.sendStatus(400);
        }
    })
}

module.exports = getUser;