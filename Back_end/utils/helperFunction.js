const connection = require('../database/database');

const getCartOrCreate = async (userId) => {
    const [result] = await connection.query('SELECT * FROM cart WHERE user_id = ?', [userId]);
    if(result.length === 0){
        const [result] = await connection.query('INSERT INTO cart (user_id) VALUES (?)', [userId]) ;
        return result.insertId;
    }
    else{
        return result[0].cart_id
    }
}

module.exports = getCartOrCreate;
    