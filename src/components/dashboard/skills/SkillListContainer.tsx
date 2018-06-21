import * as React from 'react';
import { Spinner } from '../../shared/spinner/Spinner';
import { Visibility } from '../../shared/visibility/Visibility';
import './SkillList.css';

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

const calculatePercentages = (num: number) => {
    const fillPercentage = (num * 100) / 10;
    const emptyPercentage = 100 - fillPercentage;
    return {
        fill: fillPercentage,
        empty: emptyPercentage
    };
};


const renderSkill = (skill: Skill, indx: number) => {
    const { fill, empty } = calculatePercentages(skill.level);
    return (
        <div key={indx} className="skill-template">
            <div>{skill.name}</div>
            <div className="skill-level">
                <div
                    style={{ flexBasis: `${fill}%` }}
                    className="skill-level-fill"
                />
                <div
                    style={{ flexBasis: `${empty}%` }}
                    className="skill-level-empty"
                />
            </div>
        </div>
    );
};

export const SkillListContainer = (props: SkillListContainerProps) => (
    <React.StrictMode>
        <Spinner willSpin={false} />
        <Visibility willShow={true} >
            <section className="skills-section">
                {skills.map(renderSkill)}
            </section>
        </Visibility>
    </React.StrictMode>
);
