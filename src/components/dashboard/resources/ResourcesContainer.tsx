import * as React from 'react';
import './ResourcesContainer.css';

const renderResource = (resource: Resource, indx: number) => {
    return (
        <div className="resource" key={indx}>
            <div className="resource-header">
                <a className="blogLink" href={resource.link}>
                    <span>{resource.name}</span>
                </a>
            </div>
            <p className="resource-description">
                {resource.description}
            </p>
        </div>
    );
};

const renderResources = (resources: Resource[]) => {
    return (
        <>
            <div>
                <h2 className="resource-category">
                    category
                </h2>
            </div>
            <div className="resource-list">
                {resources.map(renderResource)}
            </div>
        </>
    );
};

type Resource = {
    category: string
    name: string
    link: string
    description: string
};

const resourcesList: Resource[] = [
    {
        category: 'podcasts',
        name: 'Coding Blocks',
        link: 'https://www.codingblocks.net',
        // tslint:disable-next-line:max-line-length
        description: 'We are a few guys who’ve been professional programmers for years.'
    },
    {
        category: 'podcasts',
        name: 'Coding Blocks',
        link: 'https://www.codingblocks.net',
        // tslint:disable-next-line:max-line-length
        description: 'We are a few guys who’ve been professional programmers for years. As avid listeners of podcasts and'
    },
    {
        category: 'podcasts',
        name: 'Simple Programmer',
        link: 'https://www.simpleprogrammer.com',
        // tslint:disable-next-line:max-line-length
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys'
    }
];

type ResourcesContainerProps = {
};

export class ResourcesContainer extends React.Component<ResourcesContainerProps> {
    render() {
        return (
            <React.StrictMode>
                <div className="resources-container">
                    {renderResources(resourcesList)}
                </div>
            </React.StrictMode>
        );
    }
}
