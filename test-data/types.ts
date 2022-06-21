export interface Register {
  firstName: string;
  lastName: string;
  email: string;
  telephone: string;
  address1: string;
  city: string;
  region: string;
  zipCode: string;
  country: string;
  username: string;
  password: string;
  passwordConfirm: string;
  subscribeNewsletter: boolean;
  fax?: string;
  company?: string;
  address2?: string;
}

export interface Login {
  username: string;
  password: string;
}

export interface OrderProduct {
  selectionNumber: number;
  productName: string;
  productModel: string;
  productPrice: string;
  productQuantity: string;
}
