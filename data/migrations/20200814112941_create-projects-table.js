exports.up = function (knex) {
  return knex.schema
    .createTable("projects", (tbl) => {
      tbl.increments();
      tbl.string("project_name").notNullable();
      tbl.string("project_description");
      tbl.boolean("completed").defaultTo(0);
    })
    .createTable("resources", (tbl) => {
      tbl.increments();
      tbl.string("resource_name").notNullable();
      tbl.string("resource_description");
    })
    .createTable("tasks", (tbl) => {
      tbl.increments();
      tbl.string("task_description").notNullable();
      tbl.string("notes");
      tbl.boolean("completed").defaultTo(0);
      tbl
        .integer("project_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("projects")
        .onDelete("CASCADE");
    })
    .createTable("project_resources", (tbl) => {
      tbl.increments();
      tbl
        .integer("project_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("projects")
        .onDelete("CASCADE");
      tbl
        .integer("resource_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("resources")
        .onDelete("CASCADE");
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("project_resources")
    .dropTableIfExists("tasks")
    .dropTableIfExists("resources")
    .dropTableIfExists("projects");
};
