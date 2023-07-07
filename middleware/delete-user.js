const asyncHandler = require('express-async-handler');

const deleteUser = (collection) => {
    return asyncHandler(async (req, res) => {
        if (req.query.email !== undefined) {
            const query = { email: req.query.email };
            collection.deleteOne(query).then((result) => {
                if (result.deletedCount !== 1) {
                    res.status(404).send("User Does Not Exist");
                }
                else {
                    res.status(200).send("Account Deleted");
                }
            })
        }
        else {
            res.sendStatus(400);
        }
    })
}

module.exports = deleteUser;