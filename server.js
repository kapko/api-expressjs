const express = require('express');
const graphqlHTTP = require('express-graphql');

const app = express();

const {
  graphql,
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLEnumType,
  GraphQLString,
  GraphQLList
} = require('graphql');

var data = [
  {id: "1", name: "kapko"},
  {id: "2", name: "john"},
  {id: "3", name: "smitt"},
]

const usersTypes = new GraphQLObjectType({
  name: 'customs',
  fields: () => ({
    name: {type: GraphQLString},
    id: {type: GraphQLString}
  })
});

var MyGraphQLSchema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
      getString: {
        type: GraphQLFloat,
        resolve() {
          return 123123123123
        }
      },
      customer:{
        type:usersTypes,
        args:{
          id:{type:GraphQLString},
          name: {type: GraphQLString}
        },
        resolve(parentValue, args){
          return {id: args.id, name: args.name};
        }
      },
      users: {
        type: new GraphQLList(usersTypes),
        resolve(parentValue, args){
          return data
        }
      }
    }
  })
});

app.use('/graphql', graphqlHTTP({
  schema: MyGraphQLSchema,
  graphiql: true
}));

app.listen(4000);

console.log('post is =', 4000);