import { ISpecificationsRepository } from "../repositories/ISpecificationsRepository";

interface IRequest {
  name: string;
  description: string;
}

class CreateSpecificationService {
  constructor(private specificationRepository: ISpecificationsRepository) {}
  execute({ name, description }: IRequest): void {
    const specificationExists = this.specificationRepository.findByName(name);

    if (specificationExists) throw new Error("Specifications already exists!");

    this.specificationRepository.create({ name, description });
  }
}

export { CreateSpecificationService };
