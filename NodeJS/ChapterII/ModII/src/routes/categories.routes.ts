import { Router } from "express";

import { CategoriesRepository } from "../modules/cars/repositories/CategoriesRepository";
import { createCategoryController } from "../modules/cars/useCases/CreateCategory";

const categoriesRoutes = Router();

const newCategory = new CategoriesRepository();

categoriesRoutes.post("/", (req, res) => {
  return createCategoryController.handle(req, res);
});

categoriesRoutes.get("/", (req, res) => {
  const ListCategories = newCategory.Show();

  return res.json(ListCategories);
});

export { categoriesRoutes };
