import { dataBase } from './Utils/Database';


export const getUsers = () => {
  return dataBase;
};

export const getUserById = (id: number) => {
  return dataBase.find((user) => user.id === id);
};


export const updateUser = (id: number, updatedUser: object) => {
    const index = dataBase.findIndex((user) => user.id === id);
    if (index !== -1) {
        dataBase[index] = {};
      return true;
    } else {
      return false;
    }
};

export const deleteUser = (id: number) => {
    const index = dataBase.findIndex((user) => user.id === id);
    if (index !== -1) {
      dataBase.splice(index, 1);
      return true;
    } else {
      return false;
    }
};

export const addUser = (newUser: object ) => {
    dataBase.push(newUser);
    return true;
    };
