import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { AppRoutingModule } from './app-routing/app-routing.module';

import { NgxPageScrollCoreModule } from 'ngx-page-scroll-core';
import { NgxPageScrollModule } from 'ngx-page-scroll';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ParallaxDirective } from '@theme/directives/parallax.directive';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home/home.component';

@NgModule({
	imports: [
		BrowserModule,
		NgxPageScrollCoreModule,
		NgxPageScrollModule,
		FontAwesomeModule,
		RouterModule,
		NgbModule,
		AppRoutingModule
	],
	declarations: [AppComponent, ParallaxDirective, HeaderComponent, HomeComponent],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
