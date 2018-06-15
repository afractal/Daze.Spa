import * as React from 'react';
import './ProjectList.css';
import { Project as ProjectDomain } from '../../../domain';
import { Project } from './project/Project';

type ProjectListProps = Readonly<{
    projects: ProjectDomain[]
}>;

const mapToProject = (project: ProjectDomain, index: number) => (
    <Project
        key={index}
        {...project}
    />
);

const renderProjects = (projects: ProjectDomain[]) =>
    projects.map(mapToProject);

export const ProjectList = (props: ProjectListProps) => (
    <section className="project-section">
        {renderProjects(props.projects)}
    </section>
);
