import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'oddBoldText'
})
export class OddBoldTextPipe implements PipeTransform {
	transform(value: any, ...args: any[]): any {
		const strArray = value.split(' ');
		const res = [];
		for (let i = 1; i <= strArray.length; i++) {
			if (i % 2 === 0) {
				res.push('<strong>' + strArray[i] + '</strong> ');
			} else {
				res.push(strArray[i]);
			}
		}

		// return the entire array modify
		return res.join(' ');
	}
}
