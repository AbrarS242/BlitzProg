const mongoose = require("mongoose");
const Schema = mongoose.Schema;

function createModel(name, fields) {
  return mongoose.model(name, new Schema(fields));
}

const TestCase = createModel("TestCase", {
    input: String,
    output: String,
    memoryLimitBytes: Number, // Bytes
    timeLimitSeconds: Number  // Seconds
});

const Problem = createModel("Problem", {
    name: String,
    description: String,
    status: {
      type: String,
      enum: ["Easy", "Medium", "Hard"],
    },
    cases: [TestCase.schema],
    author: String,
    verified: Boolean
});

module.exports = {
    Problem,
    TestCase
};