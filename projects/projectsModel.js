const db = require("../data/db-config");

module.exports = {
  getProjects,
  addProject,
  getResources,
  addResource,
};

function getProjects() {
  return db("projects");
}

function addProject() {
  return db("projects").insert(proj);
}

function getResources() {
  return db("resources");
}

function addResource() {
  return db("resources").insert(resource);
}
