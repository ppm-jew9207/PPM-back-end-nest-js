export const CATEGORIES_JOIN_QUERY = {
  $lookup: {
    let: {
      categoriesData: "$categories"
    },
    from: "categories",
    pipeline: [
      {
        $match: {
          $expr: {$and: [
            {$in: [{
             $toString: "$_id"
           }, {$ifNull :['$$categoriesData',[]]}]}
          ]}
        }
      }
    ],
    as: "categories"
  }
};

export const LEARN_ITEMS_JOIN_QUERY = {
  $lookup: {
    let: {
      learnItemsData: "$learnItems"
    },
    from: "learnitems",
    pipeline: [
      {
        $match: {
          $expr: {$and: [
            {$in: [{
             $toString: "$_id"
           }, {$ifNull :['$$learnItemsData',[]]}]}
          ]}
        }
      }
    ],
    as: "learnItems"
  }
};

export const LESSONS_JOIN_QUERY = {
  $lookup: {
    let: {
      lessonsListData: "$lessonsList"
    },
    from: "lessons",
    pipeline: [
      {
        $match: {
          $expr: {$and: [
            {$in: [{
             $toString: "$_id"
           }, {$ifNull :['$$lessonsListData',[]]}]}
          ]}
        }
      }
    ],
    as: "lessonsList"
  }
};

export const LIKES_JOIN_QUERY = {
  $lookup: {
    from: "likes",
    localField: "advert_id",
    foreignField: "advert",
    as: "likesList"
  }
};

export const ADVERTS_ID_QUERY = {
  "$addFields": { "advert_id": { "$toString": "$_id" }},
};