// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
      filename: './data/characters.db3'
    },
    migration: {
      directory: './data/migrations'
    },
    seeds: {
      directory: './data/seeds'
    },
    pool: {
      afterCreate: (conn, done) => {
        //runs after a connectoin is made to the sqilte engine
        conn.run('PRAGMA foreign_keys = ON', done);
      },
    },
  },

};
