import { Component, OnInit } from '@angular/core';
import { SkillService } from '../../shared/services/skill.service';
import ISkill = Daze.Interfaces.ISkill;

@Component({
    selector: 'adminSkills',
    providers: [SkillService],
    templateUrl: './admin.skills.template.html',
    styleUrls: ['./../admin.style.css']
})
export class AdminSkillsComponent implements OnInit {
    skills = new Array<ISkill>();
    selectedSkill: ISkill | null | undefined = null;
    isLoading = true;
    constructor(private readonly _skillService: SkillService) { }

    onSkillClick(id: string) {
        this.selectedSkill = this.skills.find(s => s.id == id);
    }

    onSkillDelete(id: string) {
        this._skillService.deleteSkill(id)
            .subscribe(res => (res.status == 200) ?
                console.log("skill deleted") :
                console.log("error"));
        this.skills = this.skills.filter(s => s.id != id);
        this.selectedSkill = null;
    }

    ngOnInit() {
        this._skillService.getSkills()
            .subscribe(s => this.skills.push(s),
            _ => _,
            () => this.isLoading = false);
    }
}
