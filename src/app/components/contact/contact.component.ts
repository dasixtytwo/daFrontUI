import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { FlashMessagesService } from 'angular2-flash-messages';
import { MailService } from '@theme/services/mail/mail.service';
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
	public errorMsg;

	faHome = faHome;
	faPhone = faPhone;
	faEnvelope = faEnvelope;
	faMobile = faMobile;
	faFacebook = faFacebook;
	faTwitter = faTwitter;
	faGooglePlus = faGooglePlus;
	faLinkedin = faLinkedin;
	faRss = faRss;

	model: any = {};

	constructor(
		private mailService: MailService,
		private flashMessages: FlashMessagesService
	) {}

	ngOnInit() {}

	onHandleContact(
    f: NgForm,
		fullname: string,
		email: string,
		subject: string,
		message: string
	) {
		this.mailService
			.sendContactMail(fullname, email, subject, message)
			.subscribe(
				(res: HttpResponse<any>) => {
					if (res.status === 200) {
						// we have logged in successfully
						console.log('Message sent!');
						this.flashMessages.show('Your message succesfully submitted', {
							cssClass: 'alert-success',
							timeout: 3000
						});
            f.reset(); // or form.resetForm();
					}
					console.log(res);
				},
				error => {
					this.errorMsg = error.error;
					this.flashMessages.show('Something went wrong', {
						cssClass: 'alert-danger',
						timeout: 3000
					});
					console.log('Error occured: ', this.errorMsg);
				}
			);
	}
}
