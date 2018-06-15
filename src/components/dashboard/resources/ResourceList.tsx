import * as React from 'react';
import './ResourceList.css';
import { Resource as ResourceDomain } from '../../../domain';
import { Resource } from './resource/Resource';

type ResourceListProps = Readonly<{
    resources: ResourceDomain[]
}>;

const renderResource = (resource: ResourceDomain, index: number) => (
    <Resource
        key={index}
        {...resource}
    />
);

const renderResources = (resources: ResourceDomain[]) =>
    resources.map(renderResource);

export const ResourceList = (props: ResourceListProps) => (
    <div className="resources-section">
        <div className="resource-list">
            {renderResources(props.resources)}
        </div>
    </div>
);
