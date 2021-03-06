import {
	sequence,
	group,
	query,
	animateChild,
	stagger,
	trigger,
	state,
	style,
	AUTO_STYLE,
	transition,
	animate,
	animation,
	useAnimation
} from '@angular/animations';

const customAnimation = animation(
	[
		style({
			opacity: '{{opacity}}',
			transform: 'scale({{scale}}) translate3d({{x}}, {{y}}, {{z}})'
		}),
		animate('{{duration}} {{delay}} cubic-bezier(0.0, 0.0, 0.2, 1)', style('*'))
	],
	{
		params: {
			duration: '200ms',
			delay: '0ms',
			opacity: '0',
			scale: '1',
			x: '0',
			y: '0',
			z: '0'
		}
	}
);

export const themeAnimations = [
	trigger('animate', [
		transition('void => *', [useAnimation(customAnimation)])
	]),
	trigger('openClose', [
		state(
			'open',
			style({
				width: '*',
				opacity: '1'
			})
		),
		state(
			'closed',
			style({
				width: '0px',
				opacity: '0'
			})
		),
		transition('open => closed', [animate('0.5s')]),
		transition('closed => open', [animate('0.5s')])
	]),
	trigger('inOutAnimation', [
		transition(':enter', [
			style({ height: 0, opacity: 0 }),
			animate('1s ease-out', style({ height: 400, opacity: 1 }))
		]),
		transition(':leave', [
			style({ height: 400, left: 0, opacity: 1 }),
			animate('1s ease-in', style({ height: 0, left: 290, opacity: 0 }))
		])
	])
];
