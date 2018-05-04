import * as fetch from 'isomorphic-fetch';
import { Project } from '../domain';
import { HAL } from '../services';
import env from '../common/environment';

export const getProjects = async (): Promise<HAL<Project>> => {
    const response = await fetch(`${env.apiUrl}/projects/`);
    return await response.json();
};
