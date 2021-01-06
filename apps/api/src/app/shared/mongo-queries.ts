export const CATEGORIES_JOIN_QUERY = [{
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
},
{
  $lookup: {
    let: {
      learnItemsData: "$learnItems"
    },
    from: "learnItems",
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
}];