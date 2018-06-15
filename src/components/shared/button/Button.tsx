import * as React from 'react';

type ButtonProps = Readonly<{
    onClicked: () => void
}>;

const clickHandler = (onClicked: () => void) => () => {
    onClicked();
};

export const Button = ({ onClicked }: ButtonProps) => {
    return (
        <button onClick={clickHandler(onClicked)} className="btn">
            <span>load more</span>
        </button>
    );
};
