// dummyData.js
const { v4: uuidv4 } = require('uuid');

const users = [
  {
    id: uuidv4(),
    firstName: 'John',
    lastName: 'Doe',
    email: 'anurag.kushwaha@example.com',
    profileData: { age: 24, gender: 'Male' },
    timezone: 'America/New_York'
  },
  {
    id: uuidv4(),
    firstName: 'Jane',
    lastName: 'Smith',
    email: 'kushwaha@example.com',
    profileData: { age: 25, gender: 'Male' },
    timezone: 'Europe/London'
  }
];

const trainers = [
  {
    id: uuidv4(),
    firstName: 'Kus',
    lastName: 'Doe',
    email: 'kus@example.com'
  },
  {
    id: uuidv4(),
    firstName: 'Shibu',
    lastName: 'Kus',
    email: 'shibu@example.com'
  }
];

const sessions = [
  {
    id: uuidv4(),
    userId: users[0].id,
    createdAt: new Date().toISOString()
  },
  {
    id: uuidv4(),
    userId: users[1].id,
    createdAt: new Date().toISOString()
  }
];

const assessmentResults = [
  {
    assessmentName: 'MSK Test',
    id: uuidv4(),
    results: { score: 95 },
    savedDate: new Date().toISOString(),
    stats: {
      additionalStats: { timeSpent: '30 minutes' },
      tsStats: { correctAnswers: 19, totalQuestions: 20 }
    },
    sessionId: sessions[0].id
  },
  {
    assessmentName: 'Shoulder Pain Test',
    id: uuidv4(),
    results: { score: 88 },
    savedDate: new Date().toISOString(),
    stats: {
      additionalStats: { timeSpent: '45 minutes' },
      tsStats: { correctAnswers: 22, totalQuestions: 25 }
    },
    sessionId: sessions[1].id
  }
];

const screenerChatHistory = [
  {
    id: uuidv4(),
    chat: 'Hello, how can I help you?',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: uuidv4(),
    chat: 'I need assistance with my account.',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  }
];

const authorizedRequestData = [
  {
    orgAppUser: {
      id: '2ac131d9-2e16-11ed-adfc-0242ac120002',
      email: 'anurag.nitp2@gmail.com',
      firstName: 'Anurag',
      lastName: 'Kushwaha',
      createdAt: new Date().toISOString()
    },
    orgApp: {
      id: '2ac14a10-2e16-11ed-adfc-0242ac120002',
      name: 'node Js server App',
      createdAt: new Date().toISOString()
    },
    userSession: {
      id: uuidv4(),
      userId: users[0].id,
      createdAt: new Date().toISOString()
    }
  }
];

module.exports = {
  users,
  trainers,
  sessions,
  assessmentResults,
  screenerChatHistory,
  authorizedRequestData
};
