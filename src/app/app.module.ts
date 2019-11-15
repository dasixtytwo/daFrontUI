import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppComponent } from './app.component';

@NgModule({
	imports: [BrowserModule, FontAwesomeModule],
	declarations: [AppComponent],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
