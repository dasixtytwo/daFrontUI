import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class SkillService {
	visibleSkill = [];

	getSkill() {
		return (this.visibleSkill = SKILL.slice(0));
	}

	constructor() {}
}

const SKILL = [
	{
		_id: {
			$oid: '5daf29af877f222110d07c75'
		},
		skillTitle: 'Angular',
		skillPercent: 50,
		_userId: {
			$oid: '5da9e90ffbe9f63f28c00099'
		},
		__v: 0
	},
	{
		_id: {
			$oid: '5daf29ba877f222110d07c76'
		},
		skillTitle: 'React',
		skillPercent: 70,
		_userId: {
			$oid: '5da9e90ffbe9f63f28c00099'
		},
		__v: 0
	},
	{
		_id: {
			$oid: '5daf2a93877f222110d07c78'
		},
		skillTitle: 'JavaScript',
		skillPercent: 80,
		_userId: {
			$oid: '5da9e90ffbe9f63f28c00099'
		},
		__v: 0
	},
	{
		_id: {
			$oid: '5daf2a93a77f222110d07a67'
		},
		skillTitle: 'CSS3',
		skillPercent: 90,
		_userId: {
			$oid: '5da9e90ffbe9f63f28c00099'
		},
		__v: 0
	}
];
