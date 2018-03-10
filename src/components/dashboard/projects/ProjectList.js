import * as React from 'react';
import './ProjectList.sass';

<<<<<<< HEAD:src/components/dashboard/projects/ProjectList.js
export const ProjectList = (props) => (
    <h1>project</h1>
=======
type ProjectListProps = {}

export const ProjectList = (props: ProjectListProps) => (
    <></>
>>>>>>> parent of 78977cc... readd spinner component:src/components/dashboard/projects/ProjectList.tsx
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
