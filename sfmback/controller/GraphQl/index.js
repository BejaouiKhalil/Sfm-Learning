const { makeExecutableSchema } = require('graphql-tools');
const typeDefs = require('./types/index.js');

const resolvers = require('./resolvers/classeResolvers');



const schema = makeExecutableSchema ({
    typeDefs,
    resolvers
})
module.exports = schema;