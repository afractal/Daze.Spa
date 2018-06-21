import * as React from 'react';
import { Spinner } from '../../shared/spinner/Spinner';
import { Visibility } from '../../shared/visibility/Visibility';
import './SkillList.css';
import { Skill as SkillDomain } from '../../../domain';
import { SkillList } from './SkillList';

type SkillListContainerProps = Readonly<{
    skills: SkillDomain[]
}>;

const skills: SkillDomain[] = ([
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
                <SkillList skills={props.skills} />
            </section>
        </Visibility>
    </React.StrictMode>
);
