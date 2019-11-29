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
			$oid: '5d6a65df089de40638015afa'
		},
		title: 'IP rights and their importance in the creative industries',
		subtitle: 'IP rights',
		slug: 'ip-rights-and-their-importance',
		postImage: 'assets/img/blog/IP.png',
		bodyText:
			// tslint:disable-next-line: max-line-length
			'<p>Intellectual property may be a kind of protection that offers the originator/owner the chance to bring action below civil law to prevent others to use work that some have created, using, marketing their own creation. In short, it provides the suggestions that to prosecute holding thieves, works showing intelligence with different creatives and organizations, and allows you to access the money you earned for your artistic efforts:</p><figure class="wp-block-image is-resized"><img src="assets/img/blog/prop.jpg" alt="" class="wp-image-42" width="481" height="268"/></figure><p><strong>Patents </strong>- the patent grants the inventor exclusivity on the use of the invention in the State where it has been applied for. Products, devices, processes, foodstuffs or substances can be patented. There are criteria for being able to patent a product, or process or other, which must be:</p><blockquote class="wp-block-quote"><p>New</p><p>Creative</p><p>Tradeable</p><p>permitted</p></blockquote><p><strong>Design </strong>– used to protect the visual appearance of a product. This can also be registered under patents, but for better protection this must be registered with the IPO (Intellectual Property Office).</p><p><strong>Trademark </strong>- protect new or existing brands. There are two very different points of view when it comes to defining a brand: advertising and legal.</p><p>In the world of communication, the brand is often used as asynonym for the logo, meaning one of the elements that make up the brandidentity and which, in the common language, is often identified as the"graphic part" of the brand (for example the Apple or the crocodileof Lacoste).</p><p><strong>Copyright </strong>- protects art, books, websites, photographs, music, etc... In many countries, when a person creates an original work embedded in a physical medium, he or she automatically owns the copyright. As the copyright holder, the person has the exclusive right to use that work. In most cases, only the copyright holder can indicate if someone else is authorized to use his work.</p><h4>Differencesbetween patent protection and copyright</h4><p>Copyright does not protect the idea but only its expression.The expression of software lies in its code. Therefore, it is the source codeand the object code that are protected by copyright, but not their function.This means that anyone can make software with a function like the one Icreated, as long as they do so without copying the source code and the objectcode.</p><p>Let s say, for example, that I was the first to create aprogram that allows you to free up space on your hard disk by deleting uselessfiles.Anyone can use my idea and create a similar and alternative program, aslong as it gets there by writing its own source code and does not copy mine.< /p><p>Often, for a developer it is not difficult to modify asource code just enough to exclude the copy, while obtaining the same function.For this reason, software houses tend not to detect the source codes of theirprograms. However, this caution is not always enough. The risk is that of"reverse engineering". In fact, through decompilation programs, it ispossible to go back from the obect code to the source code (with greater orlesser precision).</p > <p>The protection guaranteed by the patent is more intense thanthat guaranteed by copyright.In fact, the patent allows the invention to beprotected in any form it is reproduced: both literally and for equivalents.< /p><p>It is true that the duration of the protection guaranteed bycopyright is longer than the patent (70 years from the death of the authorinstead of 20 years from the patent application). However, this is irrelevantfor software, which becomes obsolete after a few years.</p > <p>On the other hand, copyright protection arises automaticallywith the creation of the work, while the patent requires registration.< /p><h4>Conclusion</h4 > <p>The intellectual property of software is always protected bycopyright.The exclusive rights of the author are created automatically, without the need for any formality.However, you can register the software inthe<a href = "https://www.copyrightservice.co.uk/">UK Copyright service</ a >, inorder to obtain a certain proof of authorship.< /p><p>It is of vital importance to regulate copyright in everysoftware contract: software license agreements, software developmentagreements, etc.</p > <p>Finally, for software that has an additional technicaleffect, the possibility of obtaining a patent should be considered.In fact, this form of protection is very intense and guarantees a monopoly on theinvention for 20 years.Distinguishing between patentable and non - patentable softwareis often complicated and requires a case -by -case assessment by an expert.</p>',
		category: 'Rights',
		author: 'Davide A.',
		_userId: {
			$oid: '5da9e90ffbe9f63f28c00099'
		},
		likes: [],
		date: {
			$date: '2019-10-14T14:20:49.859Z'
		}
	},
	{
		_id: {
			$oid: '5d6a66bb089de40638015afb'
		},
		title: 'The importance of networking within the creative industries',
		subtitle: 'networking',
		slug: 'importance-of-networking',
		postImage: 'assets/img/blog/networking.jpg',
		bodyText:
			// tslint:disable-next-line: max-line-length
			'<h4>What is Networking?</h4><p>Networking is an exchange of information with other peoplewho can contribute to the development and improvement of yourself and yourcareer, serves to construct economical relationships.</p><p>Networking makes a difference for you in order to createyourself professionally.</p><h4>The Networking is important foryour career?</h4><p>Experts agree, people who have good networking and are wellconnected with others are often the most successful. </p><p>Building a solid network system can enable you to excel in your profession in more ways. The clearest way in which Networking helps you build your career is that recruiters or companies they want to hire look first at their Network when hiring or looking for web developers, in fact research reveals that 85% off all jobs are filled via Networking &nbsp;(reference: <a href="https://www.linkedin.com/pulse/new-survey-reveals-85-all-jobs-filled-via-networking-lou-adler/" target="_blank" rel="noreferrer noopener" aria-label=" (opens in a new tab)">https://www.linkedin.com/pulse/new-survey-reveals-85-all-jobs-filled-via-networking-lou-adler/</a>) , employee references and networking are two of the best ways in which companies report their candidates to fill open positions.</p><figure class="wp-block-image is-resized"><img src="assets/img/blog/RGBC-00056_2015-09-02_v01_Why-Networking-Important-graphic.jpg" alt="" class="wp-image-71" width="482" height="252"/></figure><p>One of the largest social media to build a Networking, isLinkedIn. LinkedIn is the ideal place to do much of the networking work of alltypes of networks. As a social media&nbsp;stage&nbsp;for&nbsp;experts,LinkedIn&nbsp;makes a difference&nbsp;you keep up with everything you&nbsp;arrange&nbsp;isdoingand&nbsp;gives&nbsp;a&nbsp;gathering&nbsp;to&nbsp;examine&nbsp;vital&nbsp;business&nbsp;thoughts&nbsp;and&nbsp;create&nbsp;professionallyby learning things&nbsp;past&nbsp;your&nbsp;normal&nbsp;part. LinkedIn is nolonger just an online CV site; you get out of it what you put into it.</p><h5>The importance of neworking by USQ Edu</h5><figure class="wp-block-embed-youtube wp-block-embed is-type-video is-provider-youtube wp-embed-aspect-16-9 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">https://youtu.be/Zi3QGjEcQNU</div></figure><h5>Meet-ups andEvents</h5><p>Networking events are an incredible place. At these eventsyou can have the opportunity to talk with different companies. This allows youto talk about current projects, new themes and thoughts with other people. Oneof the sites to attend events is meetup.com. This site is a thematic site, youcan join groups that have the same interest and knowledge as you, and it allowsyou to attend meetings and talk about what you are interested in and learn newthings. The application will tell you when a meeting will take place, generallynearby you. When you go to these events it is ideal for bringing businesscards. This way you stand out from potential managers and contributors.</p><h4>How tobecome an effective networker</h4><p>The&nbsp;significance&nbsp;of&nbsp;organizing&nbsp;cannotbe&nbsp;intemperate.&nbsp;</p><p>In any case, how can you&nbsp;progress&nbsp;your&nbsp;organizing&nbsp;aptitudes&nbsp;to&nbsp;guarantee&nbsp;acompetent and&nbsp;fruitful&nbsp;organized&nbsp;association?</p><h5>Figure outwhat style is best for you on networking.</h5><p>There is no way to be the same for everyone when you are online. You can be successful utilizing distinctive organize strategies. Try touse different strategies to find out which one is best for you. Example try toattend more intimate events to start where there are not many participants,once you have discovered which is your ideal networking style, consider whereyou can go to meet and meet the right people who could help you achieve yourgoals and develop your professional career.</p><h5>Follow Up </h5><p>This is a simple task, but many disregards this stage of the networking process. Time spent talking to new people will not benefit your professional development if you fail your next path. When you have followed someone to an event or met them at a meeting, although you do not need to send a long and heard message, but you should send a connection request to LinkedIn with a personalized message. </p>',
		category: 'Social',
		author: 'Davide A.',
		_userId: {
			$oid: '5da9e90ffbe9f63f28c00099'
		},
		likes: [],
		date: {
			$date: '2019-10-14T20:14:16.859Z'
		}
	},
	{
		_id: {
			$oid: '5d6a658d089de40638015af8'
		},
		title:
			'Working in the creative industries: is freelancing the road to success?',
		subtitle: 'Working in the creative industries',
		slug: 'freelancing-the-road',
		postImage: 'assets/img/blog/freelance.jpg',
		bodyText:
			// tslint:disable-next-line: max-line-length
			'<p><strong>Are you thinking of becoming a freelance web developer?</strong> </p><p>You think you can manage your days of work, and be the bossof yourself, you want to build your own client portfolio, so as to expand yourbusiness in the future, if you think this is what you want to do, you have to thinkthat initially it can be difficult and maybe you are not suited to be afreelancer.</p><p>Personally I am one who likes to work alone, takeresponsibility, have complete control of what I do, even if this takes manyhours, perhaps more than working in a team, because in team the tasks aredivided and if you choose to be a freelance, is all on your shoulder, it alldepends on you, you have to be able to handle all the work, even if this cangive you a lot of benefits but also problems.< /p><p>Organize your work, your projects, your phone calls, create your own team of trusted collaborators and ... take a break when you want and like, this... are satisfactions, being freelance can give you this. It is important for a freelancer to have an updated portfolio with all his works or at least with the most successful ones. </p > <h4>Advantages of freelance</ h4 > <ol><li>Choose the clients according to the tieknowledge and experiences, especially at the beginning of the activity.< /li><li>The organization of your day, working or not.</li > <li>Have complete control of the project.< /li><li>Make your passion a job.</li > <li>Greater Gain Opportunity < /li><li>Possibility to work for more clients.</li > <li>Something wrong ? You can fix it without waitingfor third parties or decisions, is only yours.< /li><li>You are a brand. If you are good, over theyears, everyone will know your brand, that is you.</li > </ol><h4>Disadvantage of freelance</h4 > <ol><li>Work may not be regular.< /li><li>More competitors, especially in medium to large jobs.</li > <li>Accept projects that do not satisfy you so as not to lose works.< /li><li>Keep up to date and learn new programming languages to keep up with competitors.</li > <li>Have an accountant to keep book in order and maintain tax return for Revenue.< /li><li>Investing in new software and hardware can be expensive.</li > <li>Be responsible for finding new customers and managing daily activities.< /li><li>Complete projects on time, maintain the relationship with customers.</li > </ol><h5>Full-Time Freelancer Web developer by Travis media</h5 > <figure class="wp-block-embed-youtube wp-block-embed is-type-video is-provider-youtube wp-embed-aspect-16-9 wp-has-aspect-ratio" > <div class="wp-block-embed__wrapper" > https://www.youtube.com/watch?v=RY4aJPn2nks</div></figure><p></p><h4>Be a successful freelancer</h4><p>Being a freelancer is a life choice. Try to use the besttechnologies or programming languages that allow you to build applications orwebsites of a medium-high level to be successful and distinguish yourself fromthe competition.</p><h4>Keep your portfolio or showreelupdated</h4><p>As a freelancer, keep up to date with competitors on whatthey offer, never underestimate yourself and try to offer what competitors maynot do or may not offer, more work you produce (initially) better for you, keepa medium-high quality standard.</p><p>Keep your website with an updated client portfolio andtestimonials of what clients think about you and your work.</p><p>Being a freelancer, you have to work hard to progress and improve your knowledge.</p><h4>Useful sites</h4><p>Here a few links &nbsp;ofsites that want to start your freelance career:</p><p><a href="https://www.toptal.com/developers" target="_blank" rel="noreferrer noopener" aria-label=" (opens in a new tab)">https://www.toptal.com/developers</a></p><p><a href="https://www.freelancer.com/preferred-freelancer-program" target="_blank" rel="noreferrer noopener" aria-label=" (opens in a new tab)">https://www.freelancer.com/preferred-freelancer-program</a></p><p><a href="https://www.upwork.com/l/gb/" target="_blank" rel="noreferrer noopener" aria-label=" (opens in a new tab)">https://www.upwork.com/l/gb/</a></p>',
		category: 'Freelance',
		author: 'Davide A.',
		_userId: {
			$oid: '5da9e90ffbe9f63f28c00099'
		},
		likes: [],
		date: {
			$date: '2019-10-14T15:14:14.859Z'
		}
	},
	{
		_id: {
			$oid: '5d6e2a74a559462584e73921'
		},
		title:
			'Does the concept of professionalism apply to the creative industries?',
		subtitle: 'Concept of professionalism',
		slug: 'concept-of-professionalism',
		postImage: 'assets/img/blog/professionalism.jpg',
		bodyText:
			// tslint:disable-next-line: max-line-length
			'<h4>What does mean professional?</h4><p>Being professional means having technical skills, knowledge of what you do, the ability to analyze and improve your knowledge, and above all, the need to be professional.<br>Being professional means that at all times you have to remember that something is being done with a specific purpose and therefore you have to do it as well as you can.</p><h4>The Web development Industry</h4><p>In the area of developing websites or mobile applications, certain code criteria must be met, dictated by an organization called the World Wide Web Consortium (W3C), in which protocols and guidelines are developed, protocols are a standard of rules that allow electronic devices to communicate with each other. These include the type of data that can be transmitted, which commandsare used to receive and send data and how they are confirmed the transfer of data.<br>Protocols have a fundamental aspect in digital communication, they work in thebackground, it is not necessary for normal users to know or know how theseprotocols work, but for a professional to know these protocols is essential forthe development of an application or a website.</p><p>The W3C is guidelines are to adopt the web standards created by the W3C, so that software developers can ensure that their projects work and allow them to interpret the latest versions of HTML and CSS code, The W3C not only provides a standard for HTML and CSS but also the standard for graphics(such as PNG images), audio, video and web scripts, and W3C provides guidance on privacy and security that developers of websites and applications should follow.So be professional in the specifics of a web and mobile developer and know these standards and follow them in the best possible way. < /p><h4>Professionalism with Clients and Users (code of conduct)</h4 > <figure class="wp-block-image"> <img src="assets/img/blog/Code-of-Conduct.jpg" alt="" class="image-73" /> <figcaption>code of conduct</figcaption > </figure><p>As a web developer, I think it s importantnot only to follow the standards dictated by the W3C but also to follow therules that clients demand and expect from the work they commission, such as forexample a website should work on major browsers and all types of devices, andat the same time give users a professional product and at the same time simpleand intuitive to use, but primarily respect the privacy and security of theuser.</p > <p>The client must be listened to trying tounderstand what are his objectives for the project he wants to achieve, to dothis the client must be involved in every phase of the creation of the project, so as to let the client know at what stage of the work he is.</p><p>Create a good relationship with the customer to ensure further projects in the future.</p> <h4>Pillar of Professionalism < /h4><p>The professionalism in accordance with <a href="http://vmayamaya.pbworks.com/f/ethical-and-social-issues-in-the-information-age-texts-in-computer-science.9781846286582.30095.pdf" target="_blank" rel="noreferrer noopener" aria-label="(opens in a new tab)">Kizza</a> (page 69-74 chapter 4.2.3 to 4.2.3.4) is based on 4 pillars.</p><p><strong>Commitment</strong></p><p>The person working on a project must do sowith pleasure and not giving up because the project may seem difficult. Theperson must be willing to get help if necessary, to be able to do the jobbetter. The person must be honest and sincere and not hide the problems of thework they are doing. The project must have a deadline if this deadline is notmet, the person must inform the client and provide a valid motivation.</p><p><strong>Integrity</strong></p><p>Integrity means a state of loyalty and confidence,without compromise and incorruptibility, having a vision and love for what youare doing and put the maximum commitment to what you must do, and always givethe maximum until the job is done. The person must have vision and ability tocreate an action plan to avoid obstacles and maximize the benefits.</p><p><strong>Responsibility</strong></p><p>The person who works has the responsibilitytowards the company, and in his manager, must always be aware of the potentialrisks for privacy and security of users, be always updated on professionalstandards and constantly learn about the applications with which he is working,to give and ensure that the project is completed to the best of his knowledge.</p><p><strong>Accountability </strong></p><p>The person must always assume his responsibilities and actions. The person must be able to meet professional standards and be able to respond to his own mistakes if these have been made with his work and if the standards have not been met. </p>',
		category: 'Professionalism',
		author: 'Davide A.',
		_userId: {
			$oid: '5da9e90ffbe9f63f28c00099'
		},
		likes: [],
		date: {
			$date: '2019-10-14T15:14:09.859Z'
		}
	},
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
			'<p><strong>I am a web and mobile development student,</strong> so mycreative profession is Web development and Mobile application development, so Iwant to explain what the importance of having a portfolio is but also what aportfolio is.</p><p>I begin to say what a portfolio is, a portfolio is nothingelse that a collection of materials (projects for web developer) you have doneand that relates to your University education or work experience, those can beprojects that you have made in your University years, or projects you have donefor some customers, the basic idea is to show your skills and experience in ajob interview or to display to a future customer, practically are your concreteevidence of what you do and your professionalism, portfolio if well - organizedcan represent a great business card.< /p><p>In the portfolio you should insert or show only the bestprojects you have done, the project you go proud, because they are those show betteryour skills, those provide information about your style, your ability and youraspirations, much more than a CV could make.</p > <p>What is a Showreel? A showreel is a short video that contain example of your project or is a complete project where I explain step by step how to do a web site or a web application.< /p><h4><strong>Will a Web and Mobile Developer need a Portfolio/Showreel < /strong>?</h4 > <p>It is quite important for a mobile and web developer to have a portfolio because you could have a web application or project on GitHub that will show your work together with which programming language you are using, the showreel shows the functionality of application and also show how to move between pages, it is a short presentation of your finished works. < /p><figure class="wp-block-embed-youtube wp-block-embed is-type-video is-provider-youtube wp-embed-aspect-16-9 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">https:/ / youtu.be / 6C_KFFr4bWc</ div > <figcaption>Projects to Build to Up your Front End Web Developer Portfolio! by Aaron in Beta < /figcaption></figure > <h4><strong>Why(and for whom) a portfolio is important < /strong></h4 > <p>The portfolio is important because is your criticalcommunication tool, is the way you use to promote yourself and demonstrate yourskills, a portfolio allows you to: </p><ul><li><strong>Strengthenyour application, </strong > present evidence of what you have done and givescredibility to what is written in your CV.< /li><li><strong>makes youdistinguish </strong > from others(those that do not have a portfolio)</li><li><strong>Providesan image of you,</strong > is the truth on what you really know and how you do it.< /li><li><strong>To betterexplain what you do and what you have done </strong > or what you would like to do, this will allow the recruiters or the clients to get an idea of ​​you aboutyour abilities and understand your skills, potential and aspirations < /li></ul > <p>In a good portfolio, you should not put all of your projects, but you should focus more on the better quality one and choose quality over quantity, make a good selection of your best projects, and by featuring those looking better you will show your style and your professionalism, about the other projects that have not entered the portfolio, you will have time to talk about when you will be chosen for an interview.< /p><h4><strong>Where to promote Your portfolio</strong > </h4><p>Your projects should be promoted on social channels, such asLinkedIn, Twitter, Facebook or you can create a video on YouTube where you willexplain how you realize you work and show step by step how you did it, and theneach update should be tweeted on Twitter and/or LinkedIn. < /p><p>First of all you should have a personal web site that shows your biography, it shows your educational and work experience, shows Projects or put links to where they can be viewed, a blog page, where you can write or talk about things related to your job or your projects, your work in progress, you should create a contact page so to be contacted easily, and also enter your email address or your phone number, and be sure that your web site are intuitive and easy to use.</p > <p>Some link of my works(not many because I have worked onbackend in the past) < /p><p><a href="http:/ / alanedwardssalon.com / ">ALAN EDWARDS</a> –this is a work I have done more than 2 years ago, I used HTML, CSS and PHP</p><p><a href="http://davideagosti.me" target="_blank" rel="noreferrer noopener" aria-label=" (opens in a new tab)">DAVIDEAGOSTI</a> – this is my personal web site, is not finish yet, I have made this project in node.js for backend, used to create API to connect with React frontend.</p><p><a href="https://github.com/dasixtytwo" target="_blank" rel="noreferrer noopener" aria-label=" (opens in a new tab)">GITHUB PROJECT</a> – this is my GitHub where I put all my education project and recent projects</p><p></p>',
		category: 'Freelance',
		author: 'Davide A.',
		_userId: {
			$oid: '5da9e90ffbe9f63f28c00099'
		},
		likes: [],
		date: {
			$date: '2019-10-14T22:14:02.859Z'
		}
	}
];
