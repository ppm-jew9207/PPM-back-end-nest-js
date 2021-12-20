import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { Inject } from '@nestjs/common';
import { RatingModelService } from '../../../../models/rating/rating.service';
import { RatingViewModel } from '../../../../models/rating/rating.interface';

export class GetAverageQuery {
  constructor(public readonly courseId: string) {}
}

@QueryHandler(GetAverageQuery)
export class GetAverageHandler implements IQueryHandler<GetAverageQuery> {
  @Inject() private readonly _ratingModelService: RatingModelService;

  async execute({ courseId }: GetAverageQuery): Promise<RatingViewModel[]> {
    return this._ratingModelService.getAllByCourse(courseId);
  }
}
