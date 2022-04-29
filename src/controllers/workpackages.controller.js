import { Workpackage } from "../models/Workpackage.js";

// Read all
export const getWorkpackages = async (req, res) => {
  try {
    const workpackages = await Workpackage.findAll({
      attributes: [
        "id",
        "title",
        "description",
        "completed",
        "checked",
        "projectId",
      ],
      order: [["id", "DESC"]],
    });
    res.json(workpackages);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// Create
export const createWorkpackage = async (req, res) => {
  const { title, description, completed, checked, projectId } = req.body;
  try {
    const newWorkpackage = await Workpackage.create({
      projectId,
      title,
      description,
      completed,
      checked,
    });
    res.json(newWorkpackage);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// Read 1
export const getWorkpackage = async (req, res) => {
  const { id } = req.params;
  try {
    const workpackage = await Workpackage.findOne({
      where: { id },
      attributes: [
        "id",
        "projectId",
        "title",
        "description",
        "completed",
        "checked",
      ],
    });
    res.json(workpackage);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// Update
export const updateWorkpackage = async (req, res) => {
  const { id } = req.params;
  try {
    const workpackage = await Workpackage.findOne({
      attributes: [
        "title",
        "description",
        "completed",
        "checked",
        "id",
        "projectId",
      ],
      where: { id },
    });
    workpackage.set(req.body);
    await workpackage.save();
    return res.json(workpackage);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// Delete
export const deleteWorkpackage = async (req, res) => {
  const { id } = req.params;
  try {
    await Workpackage.destroy({ where: { id } });
    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
