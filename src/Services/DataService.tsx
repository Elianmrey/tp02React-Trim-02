import { dataBase } from '../Data/Database';


export const getUsers = () => {
  return dataBase;
};

export const getUserById = (id: number) => {
  return dataBase.find((user) => user.userId === id);
};


export const updateUser = (id: number, updatedUser: {userId: number, name: string, birthDate: string, occupation: string, experience: number}) => {
  const index: number = dataBase.findIndex((user) => user.userId === id);
    if (index !== -1) {
        dataBase[index] = { ...updatedUser, birthDate: updatedUser.birthDate };
      return true;
    } else {
      return false;
    }
};

export const deleteUser = (id: number) => {
    const index = dataBase.findIndex((user) => user.userId === id);
    if (index !== -1) {
      dataBase.splice(index, 1);
      return true;
    } else {
      return false;
    }
};

export const addUser = (newUser: {userId: number, name: string, birthDate: string, occupation: string, experience: number}  ) => {
    dataBase.push(newUser);
    return true;
    };
