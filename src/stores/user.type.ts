export interface IUser {
  id: number
  fullName: string
  username: string
  email: string
  password: string
  acceptTerms: boolean
}

export type UsersContextState = {
  users: IUser[];
  addUser: (user: IUser) => void;
  removeUser: (user: IUser) => void;
};

