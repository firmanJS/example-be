-- open in https://mongoplayground.net/ and paste this code
-- in configuration add example data.json

db.collection.aggregate([
  {
    $group: {
      _id: {
        catalog: "$catalog",
        promo: {
          $sum: "$book.promo"
        },
        price: {
          $sum: "$book.price"
        }
      }
    }
  },
  {
    $project: {
      "_id": 0,
      catalog: "$_id.catalog",
      totalPromo: "$_id.promo",
      totalPrice: "$_id.price"
    }
  }
])