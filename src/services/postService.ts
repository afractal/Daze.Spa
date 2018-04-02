import * as fetch from 'isomorphic-fetch';
import { Post } from 'src/domain';
import { HAL } from 'src/services';

export const getPosts = async (): Promise<HAL<Post>> => {
    const response = await fetch('http://localhost:8080/api/posts');
    return await response.json();
};
