exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("projects")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("projects").insert([
        {
          project_name: "Learn React",
          project_description:
            "You will learn how to use React and how to build an application",
        },
        {
          project_name: "Learn SQL",
          project_description:
            "You will learn how to query and manipulate data",
        },
        { project_name: "Learn Javascript" },
      ]);
    });
};
