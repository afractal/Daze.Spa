import * as fetch from 'isomorphic-fetch';
import { Project } from 'src/domain';
import { HAL } from 'src/services';
import env from 'src/common/environment';

export const getProjects = async (): Promise<HAL<Project>> => {
    const response = await fetch(`${env.apiUrl}/projects/`);
    return await response.json();
};
