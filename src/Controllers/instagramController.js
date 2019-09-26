module.exports.getAllInstagram = (app, req, res) => {

    const connection = app.config.dbConnection()
    const InstagramDAO = new app.src.Models.InstagramDAO(connection)

    InstagramDAO.getAllInstagram((error, records) => {

        error ? res.status(500).json(error) : res.status(200).json(records.rows)
        connection.end()

    })

}