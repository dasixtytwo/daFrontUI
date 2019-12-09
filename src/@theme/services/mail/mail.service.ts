import { Injectable } from '@angular/core';
import {
	HttpClient,
	HttpResponse,
	HttpErrorResponse
} from '@angular/common/http';
import { ApiService } from '@theme/services/api.service';
import { shareReplay, tap, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { throwError } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class MailService {
	constructor(private apiService: ApiService, private http: HttpClient) {}

	sendContactMail(
		fullname: string,
		email: string,
		subject: string,
		message: string
	): Observable<Object> {
		return this.apiService.sendContact(fullname, email, subject, message).pipe(
			shareReplay(),
			tap((res: HttpResponse<any>) => {
				console.log('Mail sent!');
			}),
			catchError(this.handleError)
		);
	}

	handleError(error: HttpErrorResponse) {
		return throwError(error || 'Server Error');
	}
}
