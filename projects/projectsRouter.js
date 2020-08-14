const express = require("express");
const router = express.Router();
const Projects = require("./projectsModel");

router.get("/", (req, res) => {
  res.status(200).json({ message: "Hello from your API!" });
});
//GET AND POST PROJECTS
router.get("/projects", (req, res) => {
  Projects.getProjects()
    .then((projects) => {
      res.status(200).json(projects);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
});

router.post("/projects", (req, res) => {
  Projects.addProject(req.body)
    .then((proj) => {
      res.status(201).json(proj);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
});

//GET AND POST RESOURCES
router.get("/resources", (req, res) => {
  Projects.getResources()
    .then((resources) => {
      res.status(200).json(resources);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
});

// router.post("/resources", (req, res)

module.exports = router;
