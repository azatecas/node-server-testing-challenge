  
const db = require('../data/db-config.js');

module.exports = {
    add,
    find,
    findBy,
    findById,
};
async function add(user) {
    const { id } = await db('characters').insert(user, 'id');
};

function find() {
    return db('characters').select('id', 'name');
};

function findById(id) {
    return db('characters')
                .where({ id })
                .select('id', 'name', 'likes')
                .first();
};

function findBy(filter) {
    return db('characters')
                .where(filter);
};