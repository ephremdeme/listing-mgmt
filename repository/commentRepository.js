const Comment = require('../models').Comment;


class CommentRepository {
    constructor() {

    }

    getAll(id) {
        return Comment.findAll({
            where: {
                listingId: id
            }
        })
    }

    findById(id) {
        return Comment.findOne({
            where: {
                id: id
            }
        })
    }

    add(body, listingId, userId) {
        return new Promise((resolve, reject) => {
            const {
                comment
            } = body;
            Comment.create({
                    comment: comment,
                    userId: userId,
                    listingId: listingId
                })
                .then(comment => resolve(comment) )
                .catch(err => {
                    console.log(err)
                    reject(err)
                })
        })

    }


    update(body, id) {
        return new Promise((resolve, reject) => {
            const {
                comment
            } = body;
            Comment.update({
                    comment: comment
                }, {
                    where: {
                        id: id
                    }
                })
                .then(comment => {
                    resolve(comment)
                })
                .catch(err => {
                    console.log(err)
                    reject(err)
                })
        })

    }

    delete(id) {
        return Comment.destroy({
            where: {
                id: id
            }
        })
    }

}

module.exports = new CommentRepository;