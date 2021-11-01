import { Category } from "../model/category";

// DTO -> Data  transfer object
interface ICreateCategoryDTO {
  name: string;
  description: string;
}

class CategoriesRepository {
  private categories: Category[];

  constructor() {
    this.categories = [];
  }

  create({ name, description }: ICreateCategoryDTO): void {
    const NewCategory = new Category();

    Object.assign(NewCategory, {
      name,
      description,
      created_at: new Date().toString(),
    });
    this.categories.push(NewCategory);
  }
}

export { CategoriesRepository };
