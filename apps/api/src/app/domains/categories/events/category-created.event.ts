import { CreateCategoryPayload } from '../../../models/categories/categories.interface';
export class CategoryCreated {
  constructor(
    public readonly id: string,
    public readonly data: CreateCategoryPayload
  ) {}
}
