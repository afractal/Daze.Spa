import * as React from 'react';
import './ProjectList.css';
import { Project as ProjectDomain } from 'src/domain';
import { Project } from './project/Project';

type ProjectListProps = {
    projects: ProjectDomain[]
};

const mapToProject = (project: ProjectDomain, index: number) =>
    <Project key={index} {...project} />;

const renderProjects = (projects: ProjectDomain[]) =>
    projects.map(mapToProject);

export const ProjectList = (props: ProjectListProps) => (
    <section className="project-section">
        {renderProjects(props.projects)}
    </section>
);