```javascript
db.collection.aggregate([
  { $match: { ... } },
  { $group: { _id: '$someField', count: { $sum: 1 } } },
  { $sort: { count: -1 } },
  { $limit: 10 }
]).forEach(doc => {
  db.collection.updateOne(
    { someField: doc._id },
    { $inc: { count: 1 } }
  );
});
```