import { Router } from "express";

import { Category } from "../model/category";
import { CategoriesRepository } from "../repositories/Categories";

const categoriesRoutes = Router();

const newCategory = new CategoriesRepository();

categoriesRoutes.post("/", (req, res) => {
  const { name, description } = req.body;

  newCategory.create({ name, description });

  return res.status(201).send();
});

export { categoriesRoutes };
