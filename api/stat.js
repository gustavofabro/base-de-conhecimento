module.exports = app => {
    const stat = app.mongoose.model('Stat', {
        users: Number,
        categories: Number,
        articles: Number,
        createdAt: Date
    })

    const get = (req, res) => {
        stat.findOne({}, {}, { sort: { 'createdAt': -1}})
            .then(stat => res.json(stat))
    }

    return { stat, get }
}