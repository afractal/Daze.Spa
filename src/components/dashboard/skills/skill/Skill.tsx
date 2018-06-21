import * as React from 'react';
import './Skill.css';
import { SkillLevel } from './SkillLevel';

type SkillProps = Readonly<{
    name: string
    level: number
}>;

const calculatePercentages = (num: number) => {
    const fillPercentage = (num * 100) / 10;
    const emptyPercentage = 100 - fillPercentage;
    return {
        fillPercentage,
        emptyPercentage
    };
};

export const Skill = (props: SkillProps) => (
    <div className="skill-template">
        <div>{props.name}</div>
        <SkillLevel
            {...calculatePercentages(props.level)}
        />
    </div>
);
