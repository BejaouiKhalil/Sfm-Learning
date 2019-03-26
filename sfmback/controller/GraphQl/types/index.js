const {mergeTypes} = require('merge-graphql-schemas');

const classe = require('./classTypes.js');
const course = require('./courseTypes');
const typeDefs= [classe,course];
module.exports = mergeTypes(typeDefs,{all:true});