import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProjectService } from '../../../shared/services/project.service';
import { Project } from '../../../shared/models/project.model';

@Component({
    selector: 'adminProjectsUpdate',
    providers: [ProjectService, FormBuilder],
    templateUrl: './admin.projects.update.template.html',
    styleUrls: ['./admin.projects.update.style.css']
})
export class AdminProjectsUpdateComponent implements OnInit {
    project: Project = null;
    projectId: string;
    updateProjectForm: FormGroup;
    constructor(private readonly _projectService: ProjectService,
        private readonly _router: ActivatedRoute,
        private readonly _formBuilder: FormBuilder) { }

    onFormSubmit(event: MouseEvent) {
        if (this.project) {
            this.project.id = this.projectId;
            this._projectService.updateProject(this.project)
                .subscribe(p => console.log('project was updated ', p),
                err => console.log(err),
                () => { });
        }
    }

    onValueChanged(data?: Project) {
        this.project = !!data ? data : new Project;
    }

    populateForm(project?: Project) {
        if (project) {
            this.updateProjectForm = this._formBuilder.group({
                name: [project.projectName, Validators.required],
                description: [project.description, Validators.required],
                url: [project.url, Validators.required]
            });
            this.updateProjectForm.valueChanges.subscribe(p => this.onValueChanged(p));
            this.onValueChanged();

        } else {
            this.updateProjectForm = this._formBuilder.group({
                name: new FormControl(),
                description: new FormControl(),
                url: new FormControl()
            })
        }
    }

    ngOnInit() {
        this.populateForm();
        this._router.params.subscribe(pr => {
            const projectId = pr['id'];
            this.projectId = projectId;
            this._projectService.findProjectById(projectId)
                .subscribe(p => {
                    this.project = p;
                    this.populateForm(p);
                });
        });
    }
}
