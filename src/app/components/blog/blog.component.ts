import { Component, OnInit, OnChanges, ViewChild } from '@angular/core';
import { BlogService } from '@theme/services/blog/blog.service';
import { ModalBlogComponent } from '@theme/components/modal-blog/modal-blog.component';

import { themeAnimations } from '@theme/animations/index';
import { faIndent, faCalendar } from '@fortawesome/free-solid-svg-icons';

@Component({
	selector: 'app-blog',
	templateUrl: './blog.component.html',
	styleUrls: ['./blog.component.scss'],
	animations: themeAnimations
})
export class BlogComponent implements OnChanges, OnInit {
	filterBy?: string = 'all';
	visiblePosts: any[] = [];

	show = true;

	// fontawesome icons
	faIndent = faIndent;
	faCalendar = faCalendar;

	@ViewChild(ModalBlogComponent, { static: false })
	childModal: ModalBlogComponent;

	constructor(private blogService: BlogService) {
		this.visiblePosts = this.blogService.getPosts();
	}

	open(modalId) {
		this.childModal.open(modalId);
	}

	toggleShow() {
		this.show = !this.show;
	}

	ngOnChanges() {
		this.visiblePosts = this.blogService.getPosts();
	}

	ngOnInit() {}
}
