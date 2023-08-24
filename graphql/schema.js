const {buildSchema}=require('graphql');

module.exports=buildSchema(`
type Post {
    _id: ID!
    title: String!
    content: String!
    imageUrl: String
    creator: User!
    createdAt: String!
    updatedAt: String!
    likes:Int
    comment:Int
}
type User{
    _id:ID!
    email:String!
    password:String!
    name:String!
    bio:String
    imageUrl:String
    isAdmin:String
    posts: [Post!]!
    createdAt:String!
    updatedAt:String!
}
type Like{
    _id:ID!
    type:String!
    count:Int!
    typeID:ID!
    user:User! 
    createdAt:String!
    updatedAt:String!
}
type Comment{
    _id:ID!
    content:String!
    post:ID!
    user:User!
    createdAt:String!
    updatedAt:String!
}
type Message{
    _id:ID!
    messageType:String!
    content:String!
    status:String
    creator:User!
    receiver:User!
    attachment:String
    createdAt:String!
    updatedAt:String!
}
type Notification{
    _id:ID!
    user:User!
    content:String
    createdAt:String!
    updatedAt:String!
}
type Relationship{
    _id:ID!
    user:User!
    following:User!
    follower:User!
    createdAt:String!
    updatedAt:String!
}

type AuthData{
    token:String!
    userId:String!
}

input UserInputData{
    email:String!
    name:String!
    password:String!
}

input PostInputData{
    title:String!
    content:String!
    imageUrl:String
}

type RootQuery{
    login(email:String!, password:String!): AuthData!
}

type RootMutation{
    createUser(userInput:UserInputData):User
    createPost(postInput:PostInputData):Post
}

schema{
    query:RootQuery
    mutation:RootMutation
}
`)


