const classe =`
    type class{
        id: ID!
        name: String!
        description:String
        createdAt:String
        lastupdate:String
    }

    input InputClass{
        name:String
        description:String
    }
    type Query {
        classes: [class]
        class(id:ID!): class
    }
    type Mutation{
        addclasse(input: InputClass!): class
        createClass(name:String): class
    }
    `;
module.exports = classe;