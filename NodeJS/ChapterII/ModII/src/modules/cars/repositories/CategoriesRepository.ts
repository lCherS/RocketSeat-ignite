import { Category } from "../model/category";
import {
  ICategoriesRepository,
  ICreateCategoryDTO,
} from "./ICategoriesRepository";
// DTO -> Data  transfer object

class CategoriesRepository implements ICategoriesRepository {
  private categories: Category[];

  constructor() {
    this.categories = [];
  }
  list(): Category[] {
    const ListCategory = this.categories.map((el) => el);

    return ListCategory;
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
  findByName(name: string): Category {
    const FindCategory = this.categories.find((el) => el.name === name);

    return FindCategory;
  }
}

export { CategoriesRepository };
