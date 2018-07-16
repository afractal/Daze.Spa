import * as fetch from 'isomorphic-fetch';
import { Skill } from '../domain';
import { HAL } from '.';
import env from '../common/environment';

export const getSkills = async (): Promise<HAL<Skill>> => {
    const response = await fetch(`${env.apiUrl}/skills/`);
    return await response.json();
};
