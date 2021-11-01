import { Router } from "express";
import { v4 as uuidV4 } from "uuid";

const categoriesRoutes = Router();

const categories = [];

categoriesRoutes.post("/", (req, res) => {
  const { name, description } = req.body;
  const NewCategory = {
    id: uuidV4(),
    name,
    description,
  };
  categories.push(NewCategory);

  return res.status(201).json(NewCategory);
});

export { categoriesRoutes };
