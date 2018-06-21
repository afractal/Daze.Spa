import * as React from 'react';

type SkillProps = Readonly<{
    name: string
    level: number
}>;

const calculatePercentages = (num: number) => {
    const fillPercentage = (num * 100) / 10;
    const emptyPercentage = 100 - fillPercentage;
    return {
        fill: fillPercentage,
        empty: emptyPercentage
    };
};

export const Skill = (props: SkillProps) => {
    const { fill, empty } = calculatePercentages(props.level);
    return (
        <div className="skill-template">
            <div>{props.name}</div>
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
