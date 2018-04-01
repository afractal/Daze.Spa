import * as React from 'react';
import './ProjectList.sass';
import { Project } from 'src/domain';

type ProjectListProps = {
    projects: Project[]
};

const renderProject = (project: Project, index: number) => (
    <div key={index} className="project-template" >
        <div className="project-head">
            <div className="project-name">
                <a href={project.url} target="_blank" rel="noopener">
                    {project.projectName}
                </a>
            </div>
            <div className="published-date-holder">
                <span className="published-date">
                    {project.publishedYear}
                </span>
            </div>
        </div>

        <div className="project-body">
            {project.description}
        </div>
    </div>
);

const renderProjects = (projects: Project[]) =>
    projects.map(renderProject);

export const ProjectList = (props: ProjectListProps) => (
    <section className="project-section">
        {renderProjects(props.projects)}
    </section>
);

/*
@Component({
    selector: 'projects',
    providers: [ProjectService],
    templateUrl: './projects.template.html',
    styleUrls: ['./projects.style.sass']
})
export class ProjectsComponent implements OnInit {
    projects = new Array<IProject>();
    isLoading = true;
    constructor(private readonly _projectService: ProjectService) { }

    ngOnInit() {
        this._projectService.getProjects()
            .subscribe(p => this.projects.push(p),
                _ => _,
                () => this.isLoading = false);
    }
}
*/
