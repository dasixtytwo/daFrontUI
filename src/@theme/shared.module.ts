import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { FilterUniquePipe } from './pipes/filter-unique.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { TruncatePipe } from './pipes/truncate.pipe';
import { OddBoldTextPipe } from './pipes/odd-bold-text.pipe';

import { SpinnerComponent } from '@theme/components/spinner/spinner.component';
import { ModalBasicComponent } from '@theme/components/modal-basic/modal-basic.component';
import { ModalBlogComponent } from '@theme/components/modal-blog/modal-blog.component';
import { MapComponent } from '@theme/components/map/map.component';

@NgModule({
	imports: [CommonModule, NgbModule, HttpClientModule, FontAwesomeModule],
	exports: [
		NgbModule,
		HttpClientModule,
		SpinnerComponent,
		FilterPipe,
		FilterUniquePipe,
		TruncatePipe,
		OddBoldTextPipe,
		ModalBasicComponent,
		ModalBlogComponent,
		MapComponent,
		FontAwesomeModule
	],
	declarations: [
		SpinnerComponent,
		FilterPipe,
		ModalBasicComponent,
		ModalBlogComponent,
		MapComponent,
		FilterPipe,
		FilterUniquePipe,
		TruncatePipe,
		OddBoldTextPipe
	],
	providers: [],
	schemas: [NO_ERRORS_SCHEMA]
})
export class SharedModule {}
