import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
	title = 'Home Page';

	constructor() {}

	ngOnInit() {
		const b = document.querySelector('body');
		b.setAttribute('data-spy', 'scroll');
		b.setAttribute('data-target', 'navbar');
		b.setAttribute('data-offset', '100');
	}
}
