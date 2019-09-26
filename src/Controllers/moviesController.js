module.exports.getAllMovies = (app, req, res) => {

    const connection = app.config.dbConnection()
    const MoviesDAO = new app.src.Models.MoviesDAO(connection)

    MoviesDAO.getAllMovies((error, records) => {

        error ? res.status(500).json(error) : res.status(200).json(records.rows)
        connection.end()

    })

}