import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { Inject } from '@nestjs/common';
import { RatingModelService } from '../../../../models/rating/rating.service';
import { RatingViewModel } from '../../../../models/rating/rating.interface';

export class GetTotalQuery {
  constructor(public readonly courseId: string) {}
}

@QueryHandler(GetTotalQuery)
export class GetTotalHandler implements IQueryHandler<GetTotalQuery> {
  @Inject() private readonly _ratingModelService: RatingModelService;

  async execute({ courseId }: GetTotalQuery): Promise<RatingViewModel[]> {
    return this._ratingModelService.getAllByCourse(courseId);
  }
}
