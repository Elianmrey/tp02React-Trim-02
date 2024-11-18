import { dataBase } from './Utils/Database';


export const getUsers = () => {
  return dataBase;
};

export const getUserById = (id: number) => {
  return dataBase.find((user) => user.id === id);
};


export const updateUser = (id: number, updatedUser) => {
    const index = dataBase.findIndex((user) => user.id === id);
    if (index !== -1) {
        dataBase[index] = {updatedUser.id, updatedUser.name, updatedUser.birthdate, updatedUser.occupation};
      return true;
    } else {
      return false;
    }
};

export const deleteUser = (id: Number) => {
    const index = dataBase.findIndex((user) => user.id === id);
    if (index !== -1) {
      dataBase.splice(index, 1);
      return true;
    } else {
      return false;
    }
};

export const addUser = (newUser: {id: number, name: string, birthdate: string, occupation: string} ) => {
    dataBase.push(newUser);
    return true;
    };
