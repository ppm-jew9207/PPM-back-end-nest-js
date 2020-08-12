import { RemoveCategoryPayload } from '../../../models/categories/categories.interface';

export class CategoryRemoved {
  constructor(public readonly category: RemoveCategoryPayload) {}
}
