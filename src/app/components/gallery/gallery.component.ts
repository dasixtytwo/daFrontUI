import { Component, OnInit } from '@angular/core';
import { faFileAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
	selector: 'app-gallery',
	templateUrl: './gallery.component.html',
	styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
	faFileAlt = faFileAlt;

	constructor() {}

	ngOnInit() {}
}
