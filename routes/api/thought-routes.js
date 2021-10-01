const router = require('express').Router();

const {
    getAllThought,
    getThoughtById,
    updateThought, 
    addThought,
    removeThought,
    addReaction,
    removeReaction
} = require('../../controllers/thought-controller');

router
    .route('/')
    .get(getAllThought)
    .post(addThought);

router
    .route('/:id')
    .get(getThoughtById)
    .put(updateThought)
    .delete(removeThought);

router
    .route('/:id/reaction')
    .put(addReaction);

router
    .route('/:id/:reactionId')
    .delete(removeReaction);

module.exports = router;