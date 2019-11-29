import { Component, OnInit, OnChanges, AfterViewInit } from '@angular/core';
import { ExperienceService } from '@theme/services/experience/experience.service';
declare const jquery: any;
declare const $: any;

@Component({
	selector: 'app-experience',
	templateUrl: './experience.component.html',
	styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnChanges, OnInit, AfterViewInit {
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
