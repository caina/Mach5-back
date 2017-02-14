'use-strict'

module.exports = (router) => {

    router.route('/sample').get((req, res) => {
        res.send({message:'this sample is running!'});
    })

}