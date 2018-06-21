import * as React from 'react';
import { Spinner } from '../../shared/spinner/Spinner';
import { Visibility } from '../../shared/visibility/Visibility';
import './SkillList.css';
import { Skill } from './skill/Skill';

type SkillListContainerProps = Readonly<{
    // skills: Skill[]
}>;

type Skill = {
    name: string
    level: number
};

const skills: Skill[] = ([
    {
        name: 'javascript',
        level: 6.9
    },
    {
        name: 'c#',
        level: 5.6
    },
    {
        name: 'postgresql',
        level: 8.2
    },
    {
        name: 'node',
        level: 9.1
    }
]);

export const SkillListContainer = (props: SkillListContainerProps) => (
    <React.StrictMode>
        <Spinner willSpin={false} />
        <Visibility willShow={true} >
            <section className="skills-section">
                {skills.map((skill, indx) => (
                    <Skill
                        key={indx}
                        {...skill}
                    />
                ))
                }
            </section>
        </Visibility>
    </React.StrictMode>
);
