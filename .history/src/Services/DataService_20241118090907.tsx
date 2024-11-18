import { dataBase } from './Utils/Database';


export const getUsers = () => {
  return dataBase;
};

export const getUserById = (id: number) => {
  return dataBase.find((user) => user.id === id);
};
