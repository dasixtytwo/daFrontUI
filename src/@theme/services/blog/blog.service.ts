import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class BlogService {
	visiblePost = [];

	getposts() {
		return (this.visiblePost = POSTS.slice(0));
	}

	constructor() {}
}

const POSTS = [];
