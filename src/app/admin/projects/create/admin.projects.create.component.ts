import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProjectService } from '../../../shared/services/project.service';
import { Project } from '../../../shared/models/project.model';

@Component({
    selector: 'adminProjectCreate',
    providers: [FormBuilder, ProjectService],
    templateUrl: './admin.projects.create.template.html'
})
export class AdminProjectsCreateComponent implements OnInit {
    projectForm: FormGroup;
    project = new Project();
    constructor(private readonly _projectService: ProjectService,
        private readonly _formBuilder: FormBuilder) { }

    onFormSubmit(ev: MouseEvent) {
        if (this.project) {
            this._projectService.createProject(this.project)
                .subscribe(r => console.log("project was inserted"),
                err => console.log(err),
                () => { });
        }
    }

    onValueChanged(data?: Project) {
        this.project = !!data ? data : new Project();
    }

    ngOnInit() {
        this.projectForm = this._formBuilder.group({
            name: [this.project.projectName, Validators.required],
            description: [this.project.description, Validators.required],
            url: [this.project.url, Validators.required]
        });

        this.projectForm.valueChanges.subscribe(r => this.onValueChanged(r));
        this.onValueChanged();
    }
}
