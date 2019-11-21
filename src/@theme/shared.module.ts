import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

import { ImageFilterPipe } from './pipes/image-filter.pipe';

import { SpinnerComponent } from '@theme/components/spinner/spinner.component';
import { ModalBasicComponent } from '@theme/components/modal-basic/modal-basic.component';

@NgModule({
	imports: [CommonModule, NgbModule, HttpClientModule],
	exports: [
		NgbModule,
		HttpClientModule,
		SpinnerComponent,
		ImageFilterPipe,
		ModalBasicComponent
	],
	declarations: [SpinnerComponent, ImageFilterPipe, ModalBasicComponent],
	providers: [],
	schemas: [NO_ERRORS_SCHEMA]
})
export class SharedModule {}
