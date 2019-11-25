import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class ExperienceService {
	visibleExp = [];

	getExp() {
		return (this.visibleExp = EXPERIENCE.slice(0));
	}
	constructor() {}
}

const EXPERIENCE = [
	{
		_id: {
			$oid: '5dadd6b0367e7f20c0ed3cbe'
		},
		current: false,
		title: 'BA in RPA',
		company: 'Renfrewshire Council',
		location: 'Paisley',
		from: {
			$date: '2019-01-01T00:00:00.000Z'
		},
		to: {
			$date: '2019-05-08T00:00:00.000Z'
		},
		description:
			// tslint:disable-next-line: max-line-length
			'Renfrewshire Council (BA in RPA, technologies used: Blue Prism, Python3, worked in a team of 3 people, my role was creating code in python to connect external process with a CRM Software)',
		_userId: {
			$oid: '5da9e90ffbe9f63f28c00099'
		},
		__v: 0
	},
	{
		_id: {
			$oid: '5dadd5e2367e7f20c0ed3cbd'
		},
		current: false,
		title: 'Fron-End developer',
		company: 'Traveltek',
		location: 'Glasgow',
		from: {
			$date: '2019-06-10T00:00:00.000Z'
		},
		to: {
			$date: '2019-09-02T00:00:00.000Z'
		},
		description:
			// tslint:disable-next-line: max-line-length
			'Front-End Developer technologies used: React/Redux, Sass, Webpack module Bundler, version Control GitHub, worked with team Front-end developer, my role was Create Component and testing for a new tours search engine application',
		_userId: {
			$oid: '5da9e90ffbe9f63f28c00099'
		},
		__v: 0
	}
];
