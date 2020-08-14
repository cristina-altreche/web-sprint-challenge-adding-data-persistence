exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("tasks")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("tasks").insert([
        {
          task_description: "study total of 120 hours",
          notes: "this is optional notes",
          completed: true,
          project_id: 1,
        },
        {
          task_description: "study total of 220 hours",
          completed: true,
          project_id: 2,
        },
        {
          task_description: "study the rest of your life",
          notes: "this is optional notes again",
          project_id: 3,
        },
        {
          task_description: "Understand hooks",
          notes: "this is optional notes again again",
          project_id: 1,
        },
      ]);
    });
};
