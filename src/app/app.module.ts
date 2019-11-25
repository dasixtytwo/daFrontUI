import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { DatePipe } from '@angular/common';

import { NgxPageScrollCoreModule } from 'ngx-page-scroll-core';
import { NgxPageScrollModule } from 'ngx-page-scroll';

import { DaParallaxDirective } from '@theme/directives/da-parallax.directive';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BackToTopComponent } from '@theme/components/backtop/back-to-top.component';

import { SharedModule } from '@theme/shared.module';

import { PortfolioService } from '@theme/services/portfolio/portfolio.service';
import { BlogService } from '@theme/services/blog/blog.service';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ServicesComponent } from './components/services/services.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { BlogComponent } from './components/blog/blog.component';
import { ContactComponent } from './components/contact/contact.component';
import { EducationComponent } from './components/about/education/education.component';
import { ExperienceComponent } from './components/about/experience/experience.component';
import { SkillComponent } from './components/about/skill/skill.component';

@NgModule({
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		NgxPageScrollCoreModule,
		NgxPageScrollModule,
		RouterModule,
		NgbModule,
		AppRoutingModule,
		SharedModule
	],
	declarations: [
		AppComponent,
		DaParallaxDirective,
		HeaderComponent,
		HomeComponent,
		AboutComponent,
		ServicesComponent,
		GalleryComponent,
		BlogComponent,
		ContactComponent,
		BackToTopComponent,
		EducationComponent,
		ExperienceComponent,
		SkillComponent
	],
	providers: [PortfolioService, BlogService, DatePipe],
	bootstrap: [AppComponent]
})
export class AppModule {}
