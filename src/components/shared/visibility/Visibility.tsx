import * as  React from 'react';

type VisibilityProps = {
    readonly willShow: boolean
    readonly children?: React.ReactNode
};

const visible = (children?: any) => (
    <div style={{ visibility: 'visible' }}>
        {children}
    </div>
);

const hidden = (children?: any) => (
    <div style={{ visibility: 'hidden', display: 'none' }}>
        {children}
    </div>
);

export const Visibility = ({ willShow, children }: VisibilityProps) => (
    willShow ? visible(children) : hidden(children)
);
