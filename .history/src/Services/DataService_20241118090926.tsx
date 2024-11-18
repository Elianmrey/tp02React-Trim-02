import { dataBase } from './Utils/Database';


export const getUsers = () => {
  return dataBase;
};

export const getUserById = (id: number) => {
  return dataBase.find((user) => user.id === id);
};


export const updateUser = (id: number, updatedUser: any) => {
    const index = dataBase.findIndex((user) => user.id === id);
    if (index !== -1) {
      dataBase[index] = updatedUser;
      return true;
    } else {
      return false;
    }
};
