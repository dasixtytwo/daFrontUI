import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'sortData'
})
export class SortDataPipe implements PipeTransform {
	transform(value: any, ...args: any[]): any {
		let sortBy = value.sort(function(b: any, a: any) {
			const dateA: any = new Date(a.from.$date),
				dateB: any = new Date(b.from.$date);
			return dateA - dateB;
		});

		return sortBy;
	}
}
