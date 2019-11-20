import { Component, OnInit } from '@angular/core';
import {
	faHome,
	faPhone,
	faEnvelope,
	faMobile,
	faRss
} from '@fortawesome/free-solid-svg-icons';
import {
	faFacebook,
	faTwitter,
	faGooglePlus,
	faLinkedin
} from '@fortawesome/free-brands-svg-icons';

@Component({
	selector: 'app-contact',
	templateUrl: './contact.component.html',
	styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
	faHome = faHome;
	faPhone = faPhone;
	faEnvelope = faEnvelope;
	faMobile = faMobile;
	faFacebook = faFacebook;
	faTwitter = faTwitter;
	faGooglePlus = faGooglePlus;
	faLinkedin = faLinkedin;
	faRss = faRss;

	constructor() {}

	ngOnInit() {}
}
