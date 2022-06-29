export interface User {
  _id?: string;
  name?: string;
  email: string;
  password: string;
  createdAt?: Date;
  updatedAt?: Date;
  __v?: number;
}

export interface ValidUser {
  _id?: string;
  name?: string;
  email?: string;
  status?: string;
  password?: string;
}
