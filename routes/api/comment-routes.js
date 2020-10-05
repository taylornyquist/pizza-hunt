const router = require('express').Router();
const {
    addComment,
    removeComment,
    addReply,
    removeReply
} = require('../../controllers/comment-controller');

// /api/comments/<pizzaId>
router.route('/:pizzaId').post(addComment);

// /api/comments/<pizzaId>/<commentId>
router
    .route('/:pizzaId/:commentId')
    .put(addReply)
    .delete(removeComment);

// /api/comments/<pizzaId>/<commentId>/<replyId> 
// It's kind of like saying, "Go to this pizza, then look at this particular comment, then delete this one reply."
router.route('/:pizzaId/:commentId/:replyId').delete(removeReply);

module.exports = router;