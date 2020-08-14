exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("resources")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("resources").insert([
        {
          resource_name: "Code Editor",
          resource_description: "VS Code, Atom, Sublime",
        },
        {
          resource_name: "Computer",
          resource_description: "Windows 10 or Mac",
        },
        {
          resource_name: "Desk",
        },
      ]);
    });
};
