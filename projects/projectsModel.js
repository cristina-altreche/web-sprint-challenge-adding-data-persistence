const db = require("../data/db-config");

module.exports = {
  getProjects,
  addProject,
  getResources,
  addResource,
  getTasks,
  addTask,
};

function getProjects() {
  return db("projects");
}

function addProject(proj) {
  return db("projects").insert(proj);
}

function getResources() {
  return db("resources");
}

function addResource(resource) {
  return db("resources").insert(resource);
}

function getTasks() {
  return db("projects")
    .select(
      "tasks.id",
      "projects.id",
      "projects.project_name",
      "projects.project_description as project_description",
      "tasks.task_description as task_description",
      "tasks.completed as task_completed",
      "tasks.notes as task_notes"
    )
    .join("tasks", "projects.id", "=", "tasks.project_id");
}

function addTask(task) {
  return db("tasks").insert(task);
}
