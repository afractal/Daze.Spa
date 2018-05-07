import * as React from 'react';
import './Resource.css';

type ResourceProps = Readonly<{
    name: string
    link: string
    description: string
}>;

export const Resource = (props: ResourceProps) => (
    <div className="resource">
        <div className="resource-header">
            <a className="blogLink" href={props.link}>
                <span>{props.name}</span>
            </a>
        </div>
        <p className="resource-description">
            {props.description}
        </p>
    </div>
);