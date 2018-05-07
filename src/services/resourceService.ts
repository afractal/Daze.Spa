import * as fetch from 'isomorphic-fetch';
import { Resource } from '../domain';
import { HAL } from '../services';
import env from '../common/environment';

export const getResources = async (): Promise<HAL<Resource>> => {
    const response = await fetch(`${env.apiUrl}/resources/`);
    return await response.json();
};
