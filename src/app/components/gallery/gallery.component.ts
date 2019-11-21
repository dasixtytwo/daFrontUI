import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { faFileAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
	selector: 'app-gallery',
	templateUrl: './gallery.component.html',
	styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
	faFileAlt = faFileAlt;

	constructor(private modalService: NgbModal) {}

	open(modalId) {
		this.modalService.open(modalId, { size: 'lg', backdrop: 'static' });
	}

	ngOnInit() {}
}
