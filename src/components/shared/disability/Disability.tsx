import * as React from 'react';

type DisabilityProps = {
    readonly whillDisable: boolean
    readonly children?: React.ReactNode
};

const disabled = (children?: any) => (
    <div className={`disabled`}>
        {children}
    </div>
);

const enabled = (children?: any) => (
    <div> {children} </div>
);

export const Disability = ({ whillDisable, children }: DisabilityProps) => (
    whillDisable ? disabled(children) : enabled(children)
);
