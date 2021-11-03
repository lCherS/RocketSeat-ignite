import { ICategoriesRepository } from "../repositories/ICategoriesRepository";

interface IRequest {
  name: string;
  description: string;
}

/**
 *  Definir o tipo de retorno
 * Corrigir retorno de erro
 * acessar o repositorio
 * Retornar algo
 */

class CreateCategoryService {
  constructor(private categoriesReposity: ICategoriesRepository) {}
  execute({ name, description }: IRequest) {
    const CategoryExistis = this.categoriesReposity.findByName(name);

    if (CategoryExistis) throw new Error("Category already exists");

    this.categoriesReposity.create({ name, description });
  }
}

export { CreateCategoryService };
