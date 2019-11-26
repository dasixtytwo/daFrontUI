import { Component, OnInit, OnChanges } from '@angular/core';
import { ExperienceService } from '@theme/services/experience/experience.service';

@Component({
	selector: 'app-experience',
	templateUrl: './experience.component.html',
	styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnChanges, OnInit {
	visibleExp: any[] = [];

	constructor(private expService: ExperienceService) {
		this.visibleExp = this.expService.getExp();
	}

	ngOnInit() {
		console.log('Experience:', this.visibleExp);
	}

	ngOnChanges() {
		this.visibleExp = this.expService.getExp();
	}
}
