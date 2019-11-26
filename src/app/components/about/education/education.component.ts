import { Component, OnInit, OnChanges } from '@angular/core';
import { EducationService } from '@theme/services/education/education.service';

@Component({
	selector: 'app-education',
	templateUrl: './education.component.html',
	styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnChanges, OnInit {
	visibleEdu: any[] = [];

	constructor(private eduService: EducationService) {
		this.visibleEdu = this.eduService.getEdu();
	}

	ngOnInit() {
		console.log('Education:', this.visibleEdu);
	}

	ngOnChanges() {
		this.visibleEdu = this.eduService.getEdu();
	}
}
