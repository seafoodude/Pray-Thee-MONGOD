const router = require('express').Router();
const {
    getThoughts,
    createThought,
    getSingleThought,
    updateThought,
    deleteThought,
    addReaction,
    deleteReaction

} = require ('../../controllers/thoughtControllers');

router.route('/').get(getThoughts).post(createThought);

router.route('/:thoughtId').get(getSingleThought).put(updateThought).delete(deleteThought);

router.route ('/:thoughtId/reactions').post(addReaction).delete(deleteReaction);

module.exports = router;

