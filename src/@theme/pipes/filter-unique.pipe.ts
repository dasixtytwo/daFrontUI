import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'filterUnique',
	pure: false
})
export class FilterUniquePipe implements PipeTransform {
	transform(value: any, args?: any[]): any {
		const categories = value.map((item: { category: any }) => item.category);
		const result = categories.filter((item: any, i: any) => {
			return categories.indexOf(item) === i;
		});

		return result;
	}
}
