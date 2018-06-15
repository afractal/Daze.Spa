import * as React from 'react';
import './Resource.css';

type ResourceProps = Readonly<{
    name: string
    link: string
    description: string
    category: string
}>;

export const Resource = (props: ResourceProps) => (
    <div className="resource">
        <div className="resource-header">
            <a className="blogLink" href={props.link}>
                <span>{props.name}</span>
            </a>
            <span className="resource-category">
                {props.category}
            </span>
        </div>
        <p className="resource-description">
            {props.description}
        </p>
    </div>
);
