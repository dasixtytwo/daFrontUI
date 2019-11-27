import { Component, OnInit, Input } from '@angular/core';

const incr = 1;

@Component({
	selector: 'da-progress-bar',
	templateUrl: 'progress-bar.component.html',
	styleUrls: ['progress-bar.component.scss']
})
export class ProgressBarComponent implements OnInit {
	@Input('title') titleSkill: string;
	@Input('percent') percentSkill: number;
	@Input('progress') progressSkill: number;

	constructor() {}

	ngOnInit() {}
}
