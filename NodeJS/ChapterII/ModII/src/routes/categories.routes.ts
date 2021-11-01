import { Router } from "express";

const categoriesRoutes = Router();

const categories = [];

categoriesRoutes.post("/categories", (req, res) => {
  const { name, description } = req.body;
  const NewCategory = { name, description };
  categories.push(NewCategory);

  return res.status(201).json(NewCategory);
});

export { categoriesRoutes };
