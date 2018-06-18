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
    <section className="projects-section">
        <div className="project-list">
            {renderProjects(props.projects)}
        </div>
    </section>
);

{/*
    <iframe
    style={{ "border": "none" }}
    src="https://cards.producthunt.com/cards/posts/120068?v=1" width="500" height="405"
    frameBorder="0" scrolling="no" allowFullScreen></iframe>
*/}