import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbModalRef, NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { faCalendar, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {
	faFacebook,
	faTwitter,
	faGooglePlus,
	faLinkedin
} from '@fortawesome/free-brands-svg-icons';

@Component({
	selector: 'app-modal-blog',
	templateUrl: './modal-blog.component.html',
	styleUrls: ['./modal-blog.component.scss']
})
export class ModalBlogComponent implements OnInit {
	public dataPost: any;

	// fontawesome icons
	faCalendar = faCalendar;
	faEnvelope = faEnvelope;
	faFacebook = faFacebook;
	faTwitter = faTwitter;
	faGooglePlus = faGooglePlus;
	faLinkedin = faLinkedin;

	private modalRef: NgbModalRef;
	@ViewChild('childmodal', { static: false })
	child: any;

	constructor(private modalService: NgbModal) {}

	ngOnInit() {}

	open(post: any) {
		this.dataPost = post;
		this.modalRef = this.modalService.open(this.child, {
			size: 'lg',
			backdrop: 'static'
		});
	}
}
