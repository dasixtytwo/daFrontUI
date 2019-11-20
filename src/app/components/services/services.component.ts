import { Component, OnInit } from '@angular/core';
import {
	faLaptop,
	faObjectGroup,
	faPaintBrush,
	faMobile,
	faClone
} from '@fortawesome/free-solid-svg-icons';
import { faFirstOrder } from '@fortawesome/free-brands-svg-icons';

@Component({
	selector: 'app-services',
	templateUrl: './services.component.html',
	styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
	faLaptop = faLaptop;
	faObjectGroup = faObjectGroup;
	faPaintBrush = faPaintBrush;
	faMobile = faMobile;
	faFirstOrder = faFirstOrder;
	faClone = faClone;

	constructor() {}

	ngOnInit() {}
}
