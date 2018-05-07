import * as React from 'react';
import './ResourcesContainer.css';
import { Resource as ResourceDomain } from '../../../domain';
import { Resource } from './resource/Resource';

const resourcesList: ResourceDomain[] = [
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

type ResourcesContainerProps = Readonly<{
}>;

export class ResourcesContainer extends React.Component<ResourcesContainerProps> {

    renderResource = (resource: ResourceDomain, indx: number) => (
        <Resource
            key={indx}
            name={resource.name}
            link={resource.link}
            description={resource.description}
        />
    )

    renderResources = (resources: ResourceDomain[]) => (
        <>
            <div className="resource-category">
                category
            </div>
            <div className="resource-list">
                {resources.map(this.renderResource)}
            </div>
        </>
    )

    render() {
        return (
            <React.StrictMode>
                <div className="resources-container">
                    {this.renderResources(resourcesList)}
                </div>
            </React.StrictMode>
        );
    }
}
