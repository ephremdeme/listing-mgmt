const Listing = require('../models').Listing;
const Photo = require('../models').Photo;

class ListingRepository {
    constructor() {

    }

    getAll() {
        return Listing.findAll({
            include: ['images']
        })
    }

    findById(id) {
        return Listing.findOne({
            where: {
                id: id
            },
            include : ['images']
        })
    }

    add(body, files = []) {
        return new Promise((resolve, reject) => {
            const {
                name,
                price,
                nrooms,
                city,
                region,
                kebele
            } = body;
            const address = {
                region: region,
                kebele: kebele,
                city: city
            }
            Listing.create({
                    name: name,
                    price: price,
                    nrooms: nrooms,
                    address: address
                }).then(listing => {
                    var images = []
                    files.map(file => {
                        images.push({
                            name: file.filename,
                            listingId: listing.id
                        })
                    })

                    Photo.bulkCreate(images).then(() => {
                        resolve(listing)
                    }).catch(err => {
                        console.log(err)
                        reject(err)
                    })
                })
                .catch(err => {
                    console.log(err)
                    reject(err)
                })
        })

    }


    update(body, files = [], id) {
        return new Promise((resolve, reject) => {
            const {
                name,
                price,
                nrooms,
                city,
                region,
                kebele
            } = body;
            const address = {
                region: region,
                kebele: kebele,
                city: city
            }
            Listing.update({
                    name: name,
                    price: price,
                    nrooms: nrooms,
                    address: address
                }, {
                    where: {
                        id: id
                    }
                }).then(listing => {
                    var images = []
                    files.map(file => {
                        images.push({
                            name: file.filename,
                            listingId: listing.id
                        })
                    })

                    Photo.bulkCreate(images).then(() => {
                        resolve(listing)
                    }).catch(err => {
                        reject(err)
                    })
                })
                .catch(err => {
                    reject(err)
                })
        })

    }

    delete(id) {
        return Listing.destroy({
            where: {
                id: id
            }
        })
    }

}

module.exports = new ListingRepository;