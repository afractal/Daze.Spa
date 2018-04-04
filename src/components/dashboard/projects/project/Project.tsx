import * as React from 'react';
import './Project.css';

type ProjectProps = {
    name: string
    description: string
    url: string
    publishedYear: number
};

export const Project = (props: ProjectProps) => (
    <div className="project-template" >
        <div className="project-head">
            <div className="project-name">
                <a href={props.url} target="_blank" rel="noopener">
                    {(props as any).projectName}
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
