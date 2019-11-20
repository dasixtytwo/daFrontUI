import { Component, OnInit } from '@angular/core';
import { themeAnimations } from '@theme/animations/index';
import {
	faIndent,
	faCalendar,
	faEnvelope
} from '@fortawesome/free-solid-svg-icons';
import {
	faFacebook,
	faTwitter,
	faGooglePlus,
	faLinkedin
} from '@fortawesome/free-brands-svg-icons';

@Component({
	selector: 'app-blog',
	templateUrl: './blog.component.html',
	styleUrls: ['./blog.component.scss'],
	animations: themeAnimations
})
export class BlogComponent implements OnInit {
	faIndent = faIndent;
	faCalendar = faCalendar;
	faEnvelope = faEnvelope;
	faFacebook = faFacebook;
	faTwitter = faTwitter;
	faGooglePlus = faGooglePlus;
	faLinkedin = faLinkedin;

	show = true;

	constructor() {}

	ngOnInit() {}

	toggleShow() {
		this.show = !this.show;
	}
}
