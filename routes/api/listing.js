const express = require('express');
const multer = require('multer');
const ListingRepository = require('../../repository/listingRepository')

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads')
    },
    filename: function (req, file, cb) {
        const filename = file.originalname.toLowerCase().split(' ').join('-');
        cb(null, Date.now() + filename)
    }
})

const uploads = multer({
    storage: storage
})

const router = express.Router();
router.get('/', (req, res) => {
    ListingRepository.getAll()
        .then(listings => res.status(200).json(listings))
        .catch(err => res.status(500).send(err))
});

router.post('/', uploads.array('files', 3), (req, res, next) => {
    ListingRepository.add(req.body, req.files)
        .then(listing => res.json(listing))
        .catch(err => {
            console.log(err);
            res.send(err)
        })
});

router.get('/:id', (req, res) => {
    const id = req.params.id;
    ListingRepository.findById(id)
        .then(listing => res.json(listing))
        .catch(err => res.json(err));
});

router.post('/:id', (req, res) => {
    const id = req.params.id;
    ListingRepository.update(req.body, req.files, id).then(data => {
        res.status(200).send("working");
    }).catch(err => res.send(err));
})

router.delete('/:id/delete', (req, res) => {
    const id = req.params.id;
    ListingRepository.delete(id).then(data => {
            console.log(data + "deleted")
            res.status(200).send("worked")
        })
        .catch(err => res.send(err));
})

module.exports = router;