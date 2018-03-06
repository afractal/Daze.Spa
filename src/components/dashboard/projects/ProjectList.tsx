import * as React from 'react';
import './ProjectList.sass';

type ProjectListProps = {}

export const ProjectList = (props: ProjectListProps) => (
    <></>
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
