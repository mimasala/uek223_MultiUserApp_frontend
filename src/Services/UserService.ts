import api from '../config/Api';
import { User } from '../types/models/User.model';

const UserService = {
  getUser: async (userID: string): Promise<User> => {
    const { data } = await api.get<User>(`/user/${userID}`);
    return data;
  },

  updateUser: (user: User) => {
    return api.put(`/user/${user.id}`, user);
  },

  addUser: (user: User) => {
    return api.post('/user/register', user).then((res) => {
      return res;
    });
  },

  getAllUsers: async (): Promise<User[]> => {
    const { data } = await api.get<User[]>(`/user`);
    return data;
  },

  deleteUser: (id: string) => {
    return api.delete(`/user/${id}`);
  },
};

export default UserService;
