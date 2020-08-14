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

router.post("/resources", (req, res) => {
  Projects.addResource(req.body)
    .then((resource) => {
      res.status(201).json(resource);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

//GET AND POST TASKS
router.get("/tasks", (req, res) => {
  let outarr = [];
  Projects.getTasks()
    .then((tasks) => {
      tasks.map((task) => {
        if (task.task_completed === 0 || task.task_completed === null) {
          outarr.push({ ...task, task_completed: false });
        } else {
          outarr.push({ ...task, task_completed: true });
        }
      });
      res.status(200).json(outarr);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
});

router.post('/projects/:id/tasks', (req, res) => {
    Projects.addTask({...req.body, project_id: req.params.id})
    .then(task => {
        res.status(201).json(task)
    })
    .catch(error => {
        res.status(500).json(error)
    })
})


module.exports = router;
