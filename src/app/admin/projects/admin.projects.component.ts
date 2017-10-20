import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../shared/services/project.service';
import IProject = Daze.Interfaces.IProject;

@Component({
    selector: 'adminProjects',
    providers: [ProjectService],
    templateUrl: './admin.projects.template.html',
    styleUrls: ['./../admin.style.css']
})
export class AdminProjectsComponent implements OnInit {
    projects = new Array<IProject>();
    isLoading = true;
    selectedProject: IProject | undefined | null = null;
    constructor(private readonly _projectService: ProjectService) { }

    onProjectClick(id: string) {
        this.selectedProject = this.projects.find(p => p.id == id);
    }

    onProjectDelete(id: string) {
        this._projectService.deleteProject(id)
            .subscribe(res => (res.status == 200)
                ? console.log("project deleted")
                : console.log("error"));
        this.projects = this.projects.filter(p => p.id != id);
        this.selectedProject = null;
    }

    ngOnInit() {
        this._projectService.getProjects()
            .subscribe(p => this.projects.push(p),
            _ => _,
            () => this.isLoading = false);
    }
}
