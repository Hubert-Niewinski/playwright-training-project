import { Login, OrderProduct, Register } from './types';

export const registerHappyPath: Register = {
  firstName: 'Hubert',
  lastName: 'Tester',
  email: `testemail${Math.floor(Math.random() * 1000000)}@testemail.com`,
  telephone: '123456789',
  company: 'Test Company',
  address1: 'Test Street',
  address2: 'Test House',
  city: 'Białystok',
  region: 'Podlaskie',
  zipCode: '15-459',
  country: 'Poland',
  username: `TestUser${Math.floor(Math.random() * 1000000)}`,
  password: 'veryHardPassword123!',
  passwordConfirm: 'veryHardPassword123!',
  subscribeNewsletter: false,
};
export const loginHappyPath: Login = {
  username: 'TestUser10',
  password: 'veryHardPassword123!',
};
export const orderProductHappyPath: OrderProduct = {
  selectionNumber: 1,
  productName: 'Skinsheen Bronzer Stick',
  productPrice: '29.50',
  productModel: '558003',
  productQuantity: '1',
};
