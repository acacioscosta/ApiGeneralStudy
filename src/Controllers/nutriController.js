module.exports.getAllNutri = (app, req, res) => {

    const connection = app.config.dbConnection()
    const NutriDAO = new app.src.Models.NutriDAO(connection)

    NutriDAO.getAllNutri((error, records) => {

        error ? res.status(500).json(error) : res.status(200).json(records.rows)
        connection.end()

    })

}