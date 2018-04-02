import { createAction, PROJECTS_REQUESTED, ProjectsPayloads } from './';

export const requestProjects = (payload: ProjectsPayloads) =>
    createAction(PROJECTS_REQUESTED, payload);

export default {
    requestProjects
};
