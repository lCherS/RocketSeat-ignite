import { Router } from "express";

import { Category } from "../model/category";

const categoriesRoutes = Router();

const categories: Category[] = [];

categoriesRoutes.post("/", (req, res) => {
  const { name, description } = req.body;
  const NewCategory = new Category();

  Object.assign(NewCategory, {
    name,
    description,
    created_at: new Date().toString(),
  });
  categories.push(NewCategory);

  return res.status(201).json(NewCategory);
});

export { categoriesRoutes };
