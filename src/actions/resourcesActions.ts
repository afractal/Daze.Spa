import { createAction, RESOURCES_REQUESTED, ResourcesPayloads } from './';

export const requestResources = (payload: ResourcesPayloads) =>
    createAction(RESOURCES_REQUESTED, payload);

export default {
    requestResources
};
