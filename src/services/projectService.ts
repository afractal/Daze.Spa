import * as fetch from 'isomorphic-fetch';
import { Project } from 'src/domain';
import { HAL } from 'src/services';

export const getProjects = async (): Promise<HAL<Project>> => {
    const response = await fetch('http://localhost:8080/api/projects');
    return await response.json();
};
