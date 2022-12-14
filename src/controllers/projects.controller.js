import { Project } from "../models/Project.js";
import { Workpackage } from "../models/Workpackage.js";

export const getProjects = async (req, res) => {
  try {
    const projects = await Project.findAll({
      attributes: ["id", "title", "description"],
    });
    res.json(projects);
  } catch (error) {}
};

export const getProject = async (req, res) => {
  const { id } = req.params;

  try {
    const project = await Project.findOne({
      where: {
        id,
      },
    });
    console.log("project:", project);
    res.json(project);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createProject = async (req, res) => {
  const { title, description } = req.body;

  try {
    const newProject = await Project.create({
      title,
      description,
    });

    res.json(newProject);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateProject = async (req, res) => {
  const { id } = req.params;
  const { title, description } = req.body;

  try {
    const project = await Project.findByPk(id);
    project.title = title;
    project.description = description;
    await project.save();

    res.json(project);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteProject = async (req, res) => {
  const { id } = req.params;

  try {
    await Project.destroy({
      where: {
        id,
      },
    });

    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getProjectWorkpackages = async (req, res) => {
  const { id } = req.params;
  console.log("project id is: ", id);
  try {
    const workpackages = await Workpackage.findAll({
      attributes: [
        "id",
        "projectId",
        "title",
        "description",
        "completed",
        "checked",
      ],
      where: { projectId: id },
    });
    console.log("workpackages; ", workpackages);
    res.json(workpackages);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
