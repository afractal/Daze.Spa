import * as fetch from 'isomorphic-fetch';
import { Book } from '../domain';
import { HAL } from '.';
import env from '../common/environment';

export const getBooks = async (): Promise<HAL<Book>> => {
    const response = await fetch(`${env.apiUrl}/books/`);
    return await response.json();
};
