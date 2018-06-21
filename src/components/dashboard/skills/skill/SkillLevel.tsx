import * as React from 'react';

type SkillLevelProps = Readonly<{
    fillPercentage: number
    emptyPercentage: number
}>;

export const SkillLevel = (props: SkillLevelProps) => (
    <div className="skill-level">
        <div
            className="skill-level-fill"
            style={{
                flexBasis: `${props.fillPercentage}%`
            }}
        />
        <div
            className="skill-level-empty"
            style={{
                flexBasis: `${props.emptyPercentage}%`
            }}
        />
    </div>
);
