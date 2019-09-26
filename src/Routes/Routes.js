module.exports = (app) => {

    app.get('/api/movies', (req, res) => {
        app.src.Controllers.moviesController.getAllMovies(app, req, res)
    })

    app.get('/api/nutri', (req, res) => {
        app.src.Controllers.nutriController.getAllNutri(app, req, res)
    })

    app.get('/api/instagram', (req, res) => {
        app.src.Controllers.instagramController.getAllInstagram(app, req, res)
    })

}