import * as React from 'react';
import { Spinner } from '../../shared/spinner/Spinner';
import { Visibility } from '../../shared/visibility/Visibility';

type SkillListContainerProps = Readonly<{
    // skills: Skill[]
}>;

type Skill = {
    name: string
    level: string
};

const skills: Skill[] = ([
    {
        name: 'Javascript/Typescript',
        level: '6'
    },
    {
        name: 'C#',
        level: '5'
    },
    {
        name: 'PostgreSql',
        level: '8'
    },
    {
        name: 'Node/Express',
        level: '9'
    }
]);

const renderSkill = (skill: Skill, indx: number) => (
    <div key={indx}>
        <div>{skill.name}</div>
        <div>{skill.level}</div>
    </div>
);

export const SkillListContainer = (props: SkillListContainerProps) => (
    <React.StrictMode>
        <Spinner willSpin={false} />
        <Visibility willShow={true} >
            {skills.map(renderSkill)}
        </Visibility>
    </React.StrictMode>
);
