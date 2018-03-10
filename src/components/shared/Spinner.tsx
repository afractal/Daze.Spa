import * as React from 'react';
import * as NProgress from 'nprogress';
import './Spinner.css';

const updateSpinner = (shouldSpin) => {
    NProgress.configure({
        showSpinner: true,
        minimum: 0.1,
        speed: 500,
        trickleSpeed: 100
    });
    shouldSpin ? NProgress.start() : NProgress.done();
};

// TODO: replace fdsf with childrens
export const Spinner = ({ shouldSpin }) => {
    updateSpinner(shouldSpin);
    return <span> fdsf </span>;
};

