import { CategoryPayload } from '../../../models/categories/categories.interface';

export class CategoryUpdated {
  constructor(public readonly category: CategoryPayload) {}
}
