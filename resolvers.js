// resolvers.js
const { v4: uuidv4 } = require('uuid');

const {
    users,
    trainers,
    sessions,
    assessmentResults,
    screenerChatHistory,
    authorizedRequestData
  } = require('./dummyData');

const resolvers = {
  Query: {
    getUserAssessmentResults: (_, { limit, offset, userAssessmentFilter }) => {
      // Implement your filtering logic here
      return {
        total: assessmentResults.length,
        userAssessmentResult: assessmentResults.slice(offset, offset + limit),
      };
    },
    getScreenerChatHistory: (_, { filter, offset, limit, order }) => {
      // Implement your filtering and ordering logic here
      let filtetedScreenChatHistory = screenerChatHistory 
      if(filter){
        filtetedScreenChatHistory = screenerChatHistory.filter ( (val) => val.id === filter.id)
      }
     
      return {
        total: filtetedScreenChatHistory.length,
        screenerChatHistory: filtetedScreenChatHistory.slice(offset, offset + limit),
      };
    },
    getAuthorizedRequestData: (_, { reqData }) => {
      // Implement your logic to get authorized request data
      return authorizedRequestData.find(data => data.reqData === reqData);
    },
  },
  Mutation: {
    registerUser: (_, { firstName, lastName, email, profileData, timezone }) => {
      const newUser = { id: uuidv4(), firstName, lastName, email, profileData, timezone };
      users.push(newUser);
      return newUser;
    },
    createUserSession: () => {
      const newSession = { id: uuidv4(), userId: uuidv4(), createdAt: new Date().toISOString() };
      sessions.push(newSession);
      return newSession;
    },
    registerTrainer: (_, { firstName, lastName, email }) => {
      const newTrainer = { id: uuidv4(), firstName, lastName, email };
      trainers.push(newTrainer);
      return newTrainer;
    },
  },
};

module.exports = resolvers;
