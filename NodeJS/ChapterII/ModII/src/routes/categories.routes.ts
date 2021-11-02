import { Router } from "express";

import { Category } from "../model/category";
import { CategoriesRepository } from "../repositories/Categories";

const categoriesRoutes = Router();

const newCategory = new CategoriesRepository();

categoriesRoutes.post("/", (req, res) => {
  const { name, description } = req.body;
  const CategoryExistis = newCategory.FindByName(name);

  if (CategoryExistis)
    return res.status(400).json({ error: "Category already exists!" });

  newCategory.create({ name, description });

  return res.status(201).send();
});

categoriesRoutes.get("/", (req, res) => {
  const ListCategories = newCategory.Show();

  return res.json(ListCategories);
});

export { categoriesRoutes };
