
exports.up = function(knex) {
  return knex.schema.createTable('characters', col => {
    col.increments();
    col
      .string('name', 128)
      .notNullable()
      .unique();
    col
      .varchar('likes', 128)
      .notNullable();
    col
      .string('dislikes', 120).notNullable();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('characters');
};
