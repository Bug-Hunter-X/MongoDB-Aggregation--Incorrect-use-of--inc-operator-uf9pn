# MongoDB Aggregation Pipeline Bug: Incorrect $inc usage
This repository demonstrates a common mistake when using the `$inc` operator in MongoDB aggregation pipelines. The code attempts to increment the count of the top 10 documents based on a certain field. However, the `$inc` operator is applied to the result set of the aggregation, not to the original documents in the collection.  This leads to incorrect results.

The solution demonstrates the correct approach using the `$inc` operator with the `update` operation. 