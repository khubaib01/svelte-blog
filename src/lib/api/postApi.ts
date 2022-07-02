import type { IPost } from '$lib/interfaces';
import axios, { AxiosInstance } from 'axios';

class PostApi {
  client: AxiosInstance;
  constructor() {
    this.client = axios.create({
      baseURL: 'https://friendly-sorry-82585.herokuapp.com/api/posts',
    });
  }

  async allPost(userid: string): Promise<IPost[]> {
    return (await this.client.get<IPost[]>('/', { params: { userid } })).data;
  }

  async searchWithTags(tags: string): Promise<IPost[]> {
    return (await this.client.get<IPost[]>('/', { params: { tags } })).data;
  }

  async addPost(newPost: IPost): Promise<IPost> {
    const addedPost = await this.client.post<IPost>('/', newPost);
    return addedPost.data;
  }

  async deletePost(id: string): Promise<IPost> {
    const deletedPost = await this.client.delete(`/${id}`);
    return deletedPost.data;
  }

  async updatePost(id: string, updates: IPost): Promise<IPost> {
    const updatedPost = await this.client.patch(`/${id}`, updates);
    return updatedPost.data;
  }
}

export const postApi = new PostApi();
