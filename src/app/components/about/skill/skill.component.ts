import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { SkillService } from '@theme/services/skill/skill.service';

declare let Waypoint: any;

@Component({
	selector: 'app-skill',
	templateUrl: './skill.component.html',
	styleUrls: ['./skill.component.scss']
})
export class SkillComponent implements OnChanges, OnInit {
	visibleSkill: any[] = [];

	constructor(private skillService: SkillService) {
		this.visibleSkill = this.skillService.getSkill();
	}

	ngOnInit() {
		console.log('Skills:', this.visibleSkill);
	}

	ngOnChanges() {
		this.visibleSkill = this.skillService.getSkill();
	}
}
