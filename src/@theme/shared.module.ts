import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

import { SpinnerComponent } from '@theme/components/spinner/spinner.component';

@NgModule({
	imports: [CommonModule, NgbModule, HttpClientModule],
	exports: [NgbModule, HttpClientModule, SpinnerComponent],
	declarations: [SpinnerComponent],
	providers: [],
	schemas: [NO_ERRORS_SCHEMA]
})
export class SharedModule {}
