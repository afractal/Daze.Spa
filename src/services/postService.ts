import * as fetch from 'isomorphic-fetch';
import { Post } from 'src/domain';
import { HAL } from 'src/services';
import env from 'src/common/environment';

export const getPosts = async (): Promise<HAL<Post>> => {
    const response = await fetch(`${env.apiUrl}/posts/`);
    return await response.json();
};

/**
 * @param offset the offset number for the page starting at 1
 * @param limit the size limit for the page
 **/
export const getPostsPaginated = async (offset: number, limit: number): Promise<HAL<Post>> => {
    const response = await fetch(`${env.apiUrl}/posts/${offset}/${limit}`);
    return await response.json();
};

export const getPost = async (slug: string): Promise<HAL<Post>> => {
    const response = await fetch(`${env.apiUrl}/posts/${slug}`);
    return await response.json();
};
