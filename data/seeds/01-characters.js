exports.seed = function(knex) {

  return knex('characters').insert([
    {
      name:"luis",
      likes: "super",
      dislikes:"lambda"
    },
    {
      name:"luis2",
      likes: "super2",
      dislikes: "lambda2"
    },
  ])
};