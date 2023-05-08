// ! ALL OF THESE ROUTES WORK!!!!

const router = require('express').Router();
const {
    getUsers,
    createUser, 
    getSingleUser,
    updateUser,
    deleteUser,
    addFriend,
    deleteFriend

} = require ('../../controllers/userControllers');
router.route('/').get(getUsers).post(createUser);

router.route('/:userId').get(getSingleUser).put(updateUser).delete(deleteUser);

router.route ('/:userId/friends/:friendId').post(addFriend).delete(deleteFriend);

module.exports = router;

