import { createAction, SKILLS_REQUESTED, SkillsPayloads } from './';

export const requestSkills = (payload: SkillsPayloads) =>
    createAction(SKILLS_REQUESTED, payload);

export default {
    requestSkills
};
