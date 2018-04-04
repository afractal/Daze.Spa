import * as fetch from 'isomorphic-fetch';
import { Post } from 'src/domain';
import { HAL } from 'src/services';
import env from 'src/common/environment';

export const getPosts = async (): Promise<HAL<Post>> => {
    const response = await fetch(`${env.apiUrl}/post/`);
    return await response.json();
};

export const getPost = async (slug: string): Promise<HAL<Post>> => {
    const response = await fetch(`${env.apiUrl}/post/slug/${slug}`);
    return await response.json();
};
