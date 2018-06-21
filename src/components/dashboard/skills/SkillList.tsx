import * as React from 'react';
import './SkillList.css';
import { Skill as SkillDomain } from '../../../domain';
import { Skill } from './skill/Skill';

type SkillListProps = Readonly<{
    skills: SkillDomain[]
}>;

const renderSkill = (skill: SkillDomain, indx: number) => (
    <Skill
        key={indx}
        {...skill}
    />
);

const renderSkills = (skills: SkillDomain[]) =>
    skills.map(renderSkill);

export const SkillList = (props: SkillListProps) => (
    <section className="skills-section">
        <div className="skill-list">
            {renderSkills(props.skills)}
        </div>
    </section>
);
