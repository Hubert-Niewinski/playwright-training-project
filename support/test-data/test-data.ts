export const happyPath = {
  register: {
    firstName: "Hubert",
    lastName: "Tester",
    email: `testemail${Math.floor(Math.random() * 10000)}@testemail.com`,
    telephone: "123456789",
    company: "Test Company",
    address1: "Test Street",
    address2: "Test House",
    city: "Białystok",
    region: "Podlaskie",
    zipCode: "15-459",
    country: "Poland",
    login: `TestUser${Math.floor(Math.random() * 10000)}`,
    password: "veryHardPassword123!",
    passwordConfirm: "veryHardPassword123!",
    subscribeNewsletter: false,
  },
  login: {
    username: "TestUser10",
    password: "veryHardPassword123!",
  },
};
