import { Component, OnInit, Inject } from '@angular/core';
import { PageScrollService } from 'ngx-page-scroll-core';
import { DOCUMENT } from '@angular/common';

@Component({
	selector: 'header-nav',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
	sections: Array<String> = [
		'banner',
		'about',
		'services',
		'gallery',
		'blog',
		'contact'
	];

	public headerNav = true;

	constructor(
		private pageScrollService: PageScrollService,
		@Inject(DOCUMENT) private document: any
	) {}

	ngOnInit() {
		this.pageScrollService.scroll({
			document: this.document,
			scrollTarget: '.wrapper'
		});
	}
}
