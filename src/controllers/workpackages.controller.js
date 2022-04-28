import { Workpackage } from "../models/Workpackage.js";

export const getWorkpackages = async (req, res) => {
  try {
    const workpackages = await Workpackage.findAll();
    res.json(workpackages);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createWorkpackage = async (req, res) => {
  const { title, description, completed, checked } = req.body;

  try {
    const newWorkpackage = await Workpackage.create({
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

export const getWorkpackage = async (req, res) => {
  const { id } = req.params;
  try {
    const workpackage = await Workpackage.findOne({
      where: { id },
      attributes: ["title"],
    });
    res.json(workpackage);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateWorkpackage = async (req, res) => {
  const { id } = req.params;
  try {
    const workpackage = await Workpackage.findOne({
      where: { id },
    });
    workpackage.set(req.body)
    await workpackage.save();
    return res.json(workpackage)
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteWorkpackage = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await Workpackage.destroy({ where: { id } });
    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
