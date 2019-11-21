import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbModalRef, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
	selector: 'app-modal-basic',
	templateUrl: './modal-basic.component.html',
	styleUrls: ['./modal-basic.component.scss']
})
export class ModalBasicComponent implements OnInit {
	public dataProject: object;

	private modalRef: NgbModalRef;
	@ViewChild('childmodal', { static: false })
	child: any;

	constructor(private modalService: NgbModal) {}

	ngOnInit() {}

	open(project: object) {
		this.dataProject = project;
		this.modalRef = this.modalService.open(this.child, { size: 'lg' });
		// this.modalRef.result.then(result => {}, () => {});
	}
}
