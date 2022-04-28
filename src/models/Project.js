import { DataTypes } from "sequelize";
import { sequelize } from "../db/database.js";

import { Workpackage } from "./Workpackage.js";

export const Project = sequelize.define(
  "projects",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: true,
  }
);

Project.hasMany(Workpackage, {
  foreignKey: "projectId",
  sourceKey: "id",
});

Workpackage.belongsTo(Project, {
  foreignKey: "projectId",
  targetId: "id",
});
