import { Component, OnInit } from '@angular/core';
import { SkillService } from '../../shared/services/skill.service';
import { Skill } from '../../shared/models/skill.model';

@Component({
    selector: 'skills',
    providers: [SkillService],
    templateUrl: './skills.template.html',
    styleUrls: ['./skills.style.css']
})
export class SkillsComponent implements OnInit {
    languages = new Array<Skill>();
    frameworks = new Array<Skill>();
    databases = new Array<Skill>();
    isLanguagesLoading = true;
    isDatabasesLoading = true;
    isFrameworksLoading = true;
    constructor(private readonly _skillService: SkillService) { }

    ngOnInit() {
        this._skillService.getSkillsByFocusArea("languages")
            .subscribe(l => this.languages.push(
                new Skill(l.name, !!l.courses ? l.courses.length : 0)),
            _ => _,
            () => this.isLanguagesLoading = false);

        this._skillService.getSkillsByFocusArea("databases")
            .subscribe(d => this.databases.push(
                new Skill(d.name, !!d.courses ? d.courses.length : 0)),
            _ => _,
            () => this.isDatabasesLoading = false);

        this._skillService.getSkillsByFocusArea("frameworks")
            .subscribe(f => this.frameworks.push(
                new Skill(f.name, !!f.courses ? f.courses.length : 0)),
            _ => _,
            () => this.isFrameworksLoading = false);
    }
}
