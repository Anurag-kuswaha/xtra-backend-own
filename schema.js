// schema.js
const { gql } = require('apollo-server-express');

const typeDefs = gql`
  scalar JSON

  type User {
    id: ID!
    firstName: String
    lastName: String
    email: String!
    profileData: JSON
    timezone: String
  }

  type UserSession {
    id: ID!
    userId: ID!
    createdAt: String
  }

  type AssessmentStats {
    additionalStats: JSON
    tsStats: JSON
  }

  type UserAssessmentResult {
    assessmentName: String
    id: ID!
    results: JSON
    savedDate: String
    stats: AssessmentStats
    sessionId: ID!
  }

  type ScreenerChat {
    id: ID!
    chat: String
    createdAt: String
    updatedAt: String
  }

  type OrgAppUser {
    id: ID!
    email: String!
    firstName: String
    lastName: String
    createdAt: String
  }

  type OrgApp {
    id: ID!
    name: String
    createdAt: String
  }

  type AuthorizedRequestData {
    orgAppUser: OrgAppUser
    orgApp: OrgApp
    userSession: UserSession
  }

  input userAssessmentFilter {
   
    startDate: String
    endDate: String
    isRequiredStats: Boolean
  }

  input ScreenerChatFilter {
    startDate: String
    endDate: String
    id: ID
  }

  input AuthRequest {
    userId: ID!
    orgAppId: ID!
    token: String!
  }

  type UserAssessmentResults {
    total: Int
    userAssessmentResult: [UserAssessmentResult]
  }

  type ScreenerChatHistory {
    total: Int
    screenerChatHistory: [ScreenerChat]
  }

  type Query {
    getUserAssessmentResults(limit: Int, offset: Int, userAssessmentFilter: userAssessmentFilter!): UserAssessmentResults
    getScreenerChatHistory(filter: ScreenerChatFilter, offset: Int, limit: Int, order: SortDirection): ScreenerChatHistory
    getAuthorizedRequestData(reqData: AuthRequest): AuthorizedRequestData
  }

  type Mutation {
    registerUser(
      firstName: String, 
      lastName: String, 
      email: String!, 
      profileData: JSON, 
      timezone: String
    ): User
    createUserSession: UserSession
    registerTrainer(firstName: String, lastName: String, email: String!): Trainer
  }

  type Trainer {
    id: ID!
    firstName: String
    lastName: String
  }

  enum SortDirection {
    ASC
    DESC
  }
`;

module.exports = typeDefs;
