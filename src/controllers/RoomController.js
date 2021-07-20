module.exports = {
    create(req, res) {
        let roomId = 123
        
        res.redirect(`/room/${roomId}`)
    }
}