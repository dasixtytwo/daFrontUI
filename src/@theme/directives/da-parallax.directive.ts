import {
	Directive,
	OnInit,
	ElementRef,
	Input,
	Renderer2,
	HostListener
} from '@angular/core';
declare var $: any;

@Directive({
	selector: '[ngParallax]'
})
export class DaParallaxDirective implements OnInit {
	// Options for directive imgSrc="path-to-your-image" imgHeight="70vh" bgSize="cover" bgPosition="50% 0" [ratio]="-0.4"
	@Input() imgSrc: string;
	@Input() imgHeight: String = '100vh';
	@Input() bgPosition: String = '50% 0';
	@Input() bgSize: String = 'cover';
	@Input() bgAttachment: String = 'fixed';
	@Input('speed') speed: number = -0.4;
	screenHeight: any;
	screenWidth: any;

	constructor(private renderer: Renderer2, private hostElement: ElementRef) {}

	@HostListener('window:resize', [])
	ngOnInit() {
		this.init();
		this.getScreenSize();
	}

	getScreenSize() {
		this.screenWidth = window.innerWidth - 100;
		const elem = this.hostElement.nativeElement;
		if (this.screenWidth <= 1024) {
			const $el = $(elem);
			const x = Math.round(window.innerWidth / 16 * 9);
			$el.css({ height: x + 'px' });
		}
	}

	init() {
		const elem = this.hostElement.nativeElement;
		this.renderer.setStyle(elem, 'height', this.imgHeight);
		this.renderer.setStyle(
			elem,
			'background-image',
			'url' + '(' + this.imgSrc + ')'
		);
		this.renderer.setStyle(elem, 'background-position', this.bgPosition);
		this.renderer.setStyle(elem, 'background-attachment', this.bgAttachment);
		this.renderer.setStyle(elem, 'background-repeat', 'no-repeat');
		this.renderer.setStyle(elem, '-webkit-background-size', this.bgSize);
		this.renderer.setStyle(elem, 'background-size', this.bgSize);
		this.renderer.setStyle(elem, '-moz-transform', 'translate3d(0, 0, 0)');
		this.renderer.setStyle(elem, '-webkit-transform', 'translate3d(0, 0, 0)');
		this.renderer.setStyle(elem, 'transform', 'translate3d(0, 0, 0)');
		this.renderer.setStyle(elem, 'speed', this.speed);

		$(function() {
			const $el = $(elem);
			const speed = $el[0].style.speed;
			$(window).on('scroll', function() {
				const scroll = $(window).scrollTop();
				$el.css({
					'background-position': '50% ' + speed * scroll + 'px'
				});
			});
		});
	}
}
