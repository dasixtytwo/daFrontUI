import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class EducationService {
	visibleEdu = [];

	getEdu() {
		return (this.visibleEdu = EDUCATION.slice(0));
	}

	constructor() {}
}

const EDUCATION = [
	{
		_id: {
			$oid: '5db0346705ab3c23a0254fcd'
		},
		current: false,
		school: 'I.T.C.G. Mose Bianchi, Italy',
		degree: 'Diploma of Computing (I.T.C.G) (High National Diploma)',
		fieldOfStudy: 'Computing',
		from: {
			$date: '1982-09-01T00:00:00.000Z'
		},
		to: {
			$date: '1985-06-28T00:00:00.000Z'
		},
		description:
			'Diploma in computing and Design, (Certification Grade achieved 76%)',
		_userId: {
			$oid: '5da9e90ffbe9f63f28c00099'
		},
		__v: 0
	},
	{
		_id: {
			$oid: '5db0343705ab3c23a0254fcc'
		},
		current: false,
		school: 'I.T.T (MI) Italy',
		degree: 'Course for C and C++ (Certification Grade achieved 82%)',
		fieldOfStudy: 'Course of C/C++',
		from: {
			$date: '1987-09-01T00:00:00.000Z'
		},
		to: {
			$date: '1988-06-28T00:00:00.000Z'
		},
		description: 'A full year course in introducing programming C/C++',
		_userId: {
			$oid: '5da9e90ffbe9f63f28c00099'
		},
		__v: 0
	},
	{
		_id: {
			$oid: '5db0340905ab3c23a0254fcb'
		},
		current: false,
		school: 'I.T.I.S (PR) Italy',
		degree: 'Course for Asp.Net C# (Grade Achieved 79%)',
		fieldOfStudy: 'Course Asp.net',
		from: {
			$date: '2003-09-01T00:00:00.000Z'
		},
		to: {
			$date: '2004-06-28T00:00:00.000Z'
		},
		description: 'Full year course in introducing Asp.net',
		_userId: {
			$oid: '5da9e90ffbe9f63f28c00099'
		},
		__v: 0
	},
	{
		_id: {
			$oid: '5db033d005ab3c23a0254fca'
		},
		current: false,
		school: 'Glasgow Clyde College',
		degree: 'HNC Web Development & Design (Grade A)',
		fieldOfStudy: 'Web Development & Design',
		from: {
			$date: '2017-08-28T00:00:00.000Z'
		},
		to: {
			$date: '2018-06-08T00:00:00.000Z'
		},
		description: 'Web Development and Design (HNC)',
		_userId: {
			$oid: '5da9e90ffbe9f63f28c00099'
		},
		__v: 0
	},
	{
		_id: {
			$oid: '5db0336005ab3c23a0254fc9'
		},
		current: true,
		school: 'UWS (Paisley)',
		degree: 'BSc(Honour) Web & Mobile Development (3rd year)',
		fieldOfStudy: 'Web & Mobile Development',
		from: {
			$date: '2018-09-02T00:00:00.000Z'
		},
		to: null,
		description: 'BSc(Honour) Web & Mobile Development (3rd year)',
		_userId: {
			$oid: '5da9e90ffbe9f63f28c00099'
		},
		__v: 0
	}
];
