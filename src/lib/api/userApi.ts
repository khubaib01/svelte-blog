import type { User, ValidUser } from '$lib/interfaces';
import axios, { AxiosInstance } from 'axios';

class UserApi {
  client: AxiosInstance;
  constructor() {
    this.client = axios.create({
      baseURL: 'http://localhost:5000/api/users',
    });
  }

  async allUser(): Promise<User[]> {
    return (await this.client.get<User[]>('/')).data;
  }

  async userInfo(id: string): Promise<User> {
    return (await this.client.get<User>(`/${id}`)).data;
  }

  async addUser(newUser: User): Promise<User> {
    const addedUser = await this.client.post<User>('/', newUser);
    return addedUser.data;
  }

  async validUser(reqBody: ValidUser): Promise<ValidUser> {
    const validUser = await this.client.post('/validuser', reqBody);
    return validUser.data;
  }

  async deleteUser(id: string): Promise<User> {
    const deletedUser = await this.client.delete(`/${id}`);
    return deletedUser.data;
  }

  async updateUser(id: string, updates: User): Promise<User> {
    const updatedUser = await this.client.patch(`/${id}`, updates);
    return updatedUser.data;
  }
}

export const userApi = new UserApi();
