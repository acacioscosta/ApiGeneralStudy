function NutriDAO(connection) {
    this._connection = connection
    this._connect = this._connection.connect()
}

NutriDAO.prototype.getAllNutri = function(callback) {
    
    const sql = 'SELECT * FROM public.nutri ORDER BY id_nutri'

    this._connection.query(sql, callback)

}

module.exports = () => {
    return NutriDAO
}