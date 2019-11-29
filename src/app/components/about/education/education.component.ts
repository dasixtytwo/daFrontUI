import { Component, OnInit, OnChanges, AfterViewInit } from '@angular/core';
import { EducationService } from '@theme/services/education/education.service';
declare const jquery: any;
declare const $: any;

@Component({
	selector: 'app-education',
	templateUrl: './education.component.html',
	styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnChanges, OnInit, AfterViewInit {
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

	ngAfterViewInit() {
		$('.about--slide-item').bxSlider({
			mode: 'vertical',
			minSlides: 3,
			moveSlides: 1,
			speed: 1200,
			infiniteLoop: true,
			controls: false,
			pager: false,
			auto: true
		});
	}
}
