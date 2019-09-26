function InstagramDAO(connection) {
    this._connection = connection
    this._connect = this._connection.connect()
}

InstagramDAO.prototype.getAllInstagram = function(callback) {
    
    const sql = 'SELECT * FROM public.instagram ORDER BY id_user'

    this._connection.query(sql, callback)

}

module.exports = () => {
    return InstagramDAO
}