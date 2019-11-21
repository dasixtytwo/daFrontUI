import { Component, OnInit, Input, OnChanges, ViewChild } from '@angular/core';
import { PortfolioService } from '@theme/services/portfolio/portfolio.service';
import { faFileAlt } from '@fortawesome/free-solid-svg-icons';
import { ModalBasicComponent } from '@theme/components/modal-basic/modal-basic.component';

@Component({
	selector: 'app-gallery',
	templateUrl: './gallery.component.html',
	styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnChanges {
	images: any[];
	filterBy?: string = 'all';
	visibleImages: any[] = [];

	faFileAlt = faFileAlt;

	@ViewChild(ModalBasicComponent, { static: false })
	childModal: ModalBasicComponent;

	constructor(private portfolioService: PortfolioService) {
		this.visibleImages = this.portfolioService.getImages();
	}

	open(objParams) {
		this.childModal.open(objParams);
	}

	ngOnChanges() {
		this.visibleImages = this.portfolioService.getImages();
	}
}
