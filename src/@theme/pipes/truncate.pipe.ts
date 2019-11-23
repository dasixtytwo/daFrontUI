import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'truncate'
})
export class TruncatePipe implements PipeTransform {
	transform(value: string, limit = 50, fullWords = false, elipses = '...') {
		if (fullWords) {
			limit = value.substr(0, limit).lastIndexOf(' ');
		}
		return value.length > limit ? value.substr(0, limit) + elipses : value;
	}
}
