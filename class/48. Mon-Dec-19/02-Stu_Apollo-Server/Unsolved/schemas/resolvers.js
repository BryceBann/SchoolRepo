const { Class } = require('../models');

// TODO: Add a comment describing the functionality of this expression
// useed to create and fulfill the querries
const resolvers = {
  Query: {
    classes: async () => {
      // TODO: Add a comment describing the functionality of this statement
      // get and return all documents from the collection
      return await Class.find({});
    }
  }
};

module.exports = resolvers;
