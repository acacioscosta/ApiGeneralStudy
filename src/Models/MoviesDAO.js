function MoviesDAO(connection) {
    this._connection = connection
    this._connect = this._connection.connect()
}

MoviesDAO.prototype.getAllMovies = function(callback) {
    
    const sql = 'SELECT * FROM public.movies ORDER BY id_movie'

    this._connection.query(sql, callback)

}

module.exports = () => {
    return MoviesDAO
}