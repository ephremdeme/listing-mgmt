const express = require('express');
const CommentRepository = require('../../repository/commentRepository')

const Router = express.Router({
    mergeParams: true
});

Router.get('/', (req, res) => {
    const id = req.params.id;
    CommentRepository.getAll(id)
        .then(comments => res.status(200).json(comments))
        .catch(err => res.json(err));

});

Router.post('/', (req, res) => {
    const {
        id
    } = req.params;
    CommentRepository.add(req.body, id, 1)
        .then(comment1 => res.json(comment1))
        .catch(err => res.json(err))
})

Router.get('/:commentId', (req, res) => {
    const {
        commentId
    } = req.params;
    CommentRepository.findById(commentId)
        .then(data => res.json(data))
        .catch(err => res.json(err))
})

Router.delete('/:commentId/delete', (req, res) => {
    const {
        commentId
    } = req.params;
    CommentRepository.delete(commentId)
        .then(data => res.send("worked" + data))
        .catch(err => res.send(err))
})

Router.post('/:commentId', (req, res) => {
    const {
        commentId
    } = req.params;
    CommentRepository.update(req.body, commentId)
    .then(data => res.json(data))
        .catch(err => res.json(err))
})

module.exports = Router;