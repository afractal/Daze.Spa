import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { SkillService } from '../../../shared/services/skill.service';
import { Skill } from '../../../shared/models/skill.model';

@Component({
    selector: 'adminSkillsUpdate',
    providers: [SkillService, FormBuilder],
    templateUrl: './admin.skills.update.template.html'
})
export class AdminSkillsUpdateComponent implements OnInit {
    skill: Skill = null;
    skillId: string;
    updateForm: FormGroup;
    constructor(private readonly _skillService: SkillService,
        private readonly _formBuilder: FormBuilder,
        private readonly _router: ActivatedRoute) { }


    onFormSubmit(event: MouseEvent) {
        if (this.skill) {
            this.skill.id = this.skillId;
            this._skillService.updateSkill(this.skill)
                .subscribe(s => console.log('skill was updated ', s),
                err => console.log(err),
                () => { });
        }
    }

    onValueChanged(data?: Skill) {
        this.skill = !!data ? data : new Skill(null, null)
    }

    populateForm(skill?: Skill) {
        if (skill) {
            this.updateForm = this._formBuilder.group({
                name: [skill.name, Validators.required],
                level: [skill.level, Validators.required],
                focusArea: [skill.focusArea, Validators.required]
            });
            this.updateForm.valueChanges.subscribe(data => this.onValueChanged(data));
            this.onValueChanged();
        } else {
            this.updateForm = this._formBuilder.group({
                name: new FormControl(),
                level: new FormControl(),
                focusArea: new FormControl()
                // courses: []
            });
        }
    }

    ngOnInit() {
        this.populateForm();
        this._router.params.subscribe(par => {
            const skillId = par['id'];
            this.skillId = skillId;
            this._skillService.findSkillById(skillId)
                .subscribe(s => {
                    this.skill = s;
                    this.populateForm(s);
                });
        });
    }
}

