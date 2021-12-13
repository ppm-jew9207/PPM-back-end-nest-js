import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { Inject } from '@nestjs/common';
import { RatingModelService } from '../../../../models/rating/rating.service';
import { RatingViewModel } from '../../../../models/rating/rating.interface';

export class GetCourseIdQuery {
  constructor(public readonly courseId: string) {}
}

@QueryHandler(GetCourseIdQuery)
export class GetCourseIdHandler implements IQueryHandler<GetCourseIdQuery> {
  @Inject() private readonly _ratingModelService: RatingModelService;

  async execute({ courseId }: GetCourseIdQuery): Promise<RatingViewModel[]> {
    return this._ratingModelService.getAllByCourse(courseId);
  }
}
