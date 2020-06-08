export type MongoMatch<T> = T &
  Partial<{
    $and: MongoFieldMatch<T>[];
    $nor: MongoFieldMatch<T>[];
    $not: MongoFieldMatch<T>[];
    $or: MongoFieldMatch<T>[];
  }>;

export type MongoFieldMatch<T> =
  | T
  | MongoMatch<T>
  | Partial<{
      $all: T[];
      $exists: boolean;
      $gt: T;
      $gte: T;
      $in: T[];
      $lt: T;
      $lte: T;
      $ne: T;
      $nin: T[];
      $options: string;
      $regex: string;
    }>;
