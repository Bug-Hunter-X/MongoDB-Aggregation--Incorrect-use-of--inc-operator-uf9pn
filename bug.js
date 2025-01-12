```javascript
// Incorrect usage of $inc operator in MongoDB aggregation pipeline
db.collection.aggregate([
  { $match: { ... } },
  { $group: { _id: '$someField', count: { $sum: 1 } } },
  { $sort: { count: -1 } },
  { $limit: 10 },
  { $inc: { count: 1 } } // Incorrect - Modifies the result set, not the original documents
]);
```