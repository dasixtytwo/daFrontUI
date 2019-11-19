import { Component, OnInit, HostListener, Inject } from '@angular/core';
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
	selected: any;

	public headerNav = true;

	constructor(
		private pageScrollService: PageScrollService,
		@Inject(DOCUMENT) private document: any
	) {}

	clicked(item) {
		this.selected = item;
	}
	isActive(item) {
		return this.selected === item;
	}

	ngOnInit() {
		this.pageScrollService.scroll({
			document: this.document,
			scrollTarget: '.wrapper'
		});
	}

	@HostListener('window:scroll', ['$event'])
	onWindowScroll(e) {
		if (window.pageYOffset > 1) {
			// tslint:disable-next-line: prefer-const
			let element = document.querySelector('body');
			element.classList.add('scrolled');
		} else {
			// tslint:disable-next-line: prefer-const
			let element = document.querySelector('body');
			element.classList.remove('scrolled');
		}
	}
}
