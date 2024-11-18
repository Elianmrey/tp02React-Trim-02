import { dataBase } from './Data/Database';


export const getUsers = () => {
  return dataBase;
};

export const getUserById = (id: number) => {
  return dataBase.find((user) => user.id === id);
};


export const updateUser = (id: number, updatedUser: {userId: number, name: string, birthdate: string, occupation: string}) => {
    const index = dataBase.findIndex((user) => user.id === id);
    if (index !== -1) {
        dataBase[index] = updatedUser;
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

export const addUser = (newUser: {userId: number, name: string, birthdate: string, occupation: string} ) => {
    dataBase.push(newUser);
    return true;
    };
