import * as React from 'react';
import * as NProgress from 'nprogress';
import './Spinner.css';

type SpinnerProps = {
    willSpin: boolean
};

const updateSpinner = (shouldSpin: boolean) => {
    NProgress.configure({
        showSpinner: true,
        minimum: 0.1,
        speed: 500,
        trickleSpeed: 100
    });
    shouldSpin ? NProgress.start() : NProgress.done();
};

// TODO: replace fdsf with childrens
export const Spinner = ({ willSpin }: SpinnerProps) => {
    updateSpinner(willSpin);
    return <span> loading </span>;
};
