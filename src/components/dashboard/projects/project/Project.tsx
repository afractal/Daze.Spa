import * as React from 'react';
import './Project.css';

type ProjectProps = {
    readonly name: string
    readonly description: string
    readonly url: string
    readonly publishedYear: number
};

export const Project = (props: ProjectProps) => (
    <div className="project-template" >
        <div className="project-head">
            <div className="project-name">
                <a
                    className="project-link"
                    href={props.url}
                    target="_blank"
                    rel="noopener"
                >
                    {props.name}
                </a>
            </div>
            <div className="published-date-holder">
                <span className="published-date">
                    {props.publishedYear}
                </span>
            </div>
        </div>

        <div className="project-body">
            {props.description}
        </div>
    </div>
);
