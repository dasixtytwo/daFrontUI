import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class BlogService {
	visiblePost = [];

	getPosts() {
		return (this.visiblePost = POSTS.slice(0));
	}

	constructor() {}
}

const POSTS = [
	{
		_id: {
			$oid: '5d6a65b0089de40638015af9'
		},
		title: 'What makes a good portfolio or showreel?',
		subtitle: 'For web development student',
		slug: 'portfolio-showreel',
		postImage: 'assets/img/blog/portfolio.jpg',
		bodyText:
			// tslint:disable-next-line: max-line-length
			'<p><strong>I am a web and mobile development student,</strong> so my creative profession is Web development and Mobile application development, so I want to explain what the importance of having a portfolio is but also what a portfolio is.</p><p>I begin to say what a portfolio is, a portfolio is nothing else that a collection of materials (projects for web developer) you have done and that relates to your University education or work experience, those can be projects that you have made in your University years, or projects you have done for some customers, the basic idea is to show your skills and experience in a job interview or to display to a future customer, practically are your concrete evidence of what you do and your professionalism, portfolio if well - organized can represent a great business card.< /p><p>In the portfolio you should insert or show only the best projects you have done, the project you go proud, because they are those show better your skills, those provide information about your style, your ability and your aspirations, much more than a CV could make.</p > <p>What is a Showreel? A showreel is a short video that contain example of your project or is a complete project where I explain step by step how to do a web site or a web application.< /p><h4><strong>Will a Web and Mobile Developer need a Portfolio/Showreel < /strong>?</h4 > <p>It is quite important for a mobile and web developer to have a portfolio because you could have a web application or project on GitHub that will show your work together with which programming language you are using, the showreel shows the functionality of application and also show how to move between pages, it is a short presentation of your finished works. < /p><figure class="wp-block-embed-youtube wp-block-embed is-type-video is-provider-youtube wp-embed-aspect-16-9 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">https:/ / youtu.be / 6C_KFFr4bWc</ div > <figcaption>Projects to Build to Up your Front End Web Developer Portfolio! by Aaron in Beta < /figcaption></figure > <h4><strong>Why(and for whom) a portfolio is important < /strong></h4 > <p>The portfolio is important because is your critical communication tool, is the way you use to promote yourself and demonstrate your skills, a portfolio allows you to: </p> <ul><li><strong>Strengthen your application, </strong > present evidence of what you have done and gives credibility to what is written in your CV.</li><li><strong>makes you distinguish </strong> from others(those that do not have a portfolio)</li><li><strong>Provides an image of you,</strong > is the truth on what you really know and how you do it.</li><li><strong>To better explain what you do and what you have done </strong> or what you would like to do, this will allow the recruiters or the clients to get an idea of ​​you about your abilitiesand understand your skills, potential and aspirations </li></ul> <p>In a good portfolio, you should not put all of your projects, but you should focus more on the better quality one and choose quality over quantity, make a good selection of your best projects, and by featuring those looking better you will show your style and your professionalism, about the other projects that have not entered the portfolio, you will have time to talk about when you will be chosen for an interview.</p><h4><strong>Where to promote Your portfolio</strong> </h4><p>Your projects should be promoted on social channels, such as LinkedIn, Twitter, Facebook or you can create a video on YouTube where you will explain how you realize you work and show step by step how you did it, and then each update should be tweeted on Twitter and/or LinkedIn. </p><p>First of all you should have a personal web site that shows your biography, it shows your educational and work experience, shows Projects or put links to where they can be viewed, a blog page, where you can write or talk about things related to your job or your projects, your work in progress, you should create a contact page so to be contacted easily, and also enter your email address or your phone number, and be sure that your web site are intuitive and easy to use.</p>',
		category: 'Creative_Technologies',
		author: 'Davide A.',
		_userId: {
			$oid: '5da9e90ffbe9f63f28c00099'
		},
		likes: [],
		date: {
			$date: '2019-10-23T22:22:49.859Z'
		}
	},
	{
		_id: {
			$oid: '5d6a65df089de40638015afa'
		},
		title: 'Second Post',
		subtitle: 'Subtitle 2nd post',
		slug: 'second-post',
		postImage: '',
		bodyText: 'This is the body text 2nd post',
		category: 'Javascript',
		author: 'Davide A.',
		_userId: {
			$oid: '5da9e90ffbe9f63f28c00099'
		},
		likes: [],
		date: {
			$date: '2019-10-22T19:20:49.859Z'
		}
	},
	{
		_id: {
			$oid: '5d6a66bb089de40638015afb'
		},
		title: 'Second Post',
		subtitle: 'Subtitle 2nd post',
		slug: 'second-post',
		postImage: 'my-pict.jpg',
		bodyText: 'This is the body text 2nd post',
		category: 'Javascript',
		author: 'Davide A.',
		_userId: {
			$oid: '5da9e90ffbe9f63f28c00099'
		},
		likes: [],
		date: {
			$date: '2019-10-22T20:22:49.859Z'
		}
	},
	{
		_id: {
			$oid: '5d6a658d089de40638015af8'
		},
		title: 'Second Post',
		subtitle: 'Subtitle 2nd post',
		slug: 'second-post',
		postImage: 'my-pict.jpg',
		bodyText: 'This is the body text 2nd post',
		category: 'Angular',
		author: 'Davide A.',
		_userId: {
			$oid: '5da9e90ffbe9f63f28c00099'
		},
		likes: [],
		date: {
			$date: '2019-10-21T15:21:49.859Z'
		}
	},
	{
		_id: {
			$oid: '5d6e2a74a559462584e73921'
		},
		title: 'Second Post',
		subtitle: 'Subtitle 2nd post',
		slug: 'second-post',
		postImage: 'my-pict.jpg',
		bodyText: 'This is the body text 2nd post',
		category: 'C#',
		author: 'Davide A.',
		_userId: {
			$oid: '5da9e90ffbe9f63f28c00099'
		},
		likes: [],
		date: {
			$date: '2019-10-21T15:21:49.859Z'
		}
	}
];
