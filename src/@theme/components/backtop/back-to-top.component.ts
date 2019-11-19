import { Component, OnInit } from '@angular/core';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';

@Component({
	selector: 'backTop',
	templateUrl: './back-to-top.component.html',
	styleUrls: ['./back-to-top.component.scss']
})
export class BackToTopComponent implements OnInit {
	faAngleUp = faAngleUp;

	constructor() {}

	ngOnInit() {}
}
