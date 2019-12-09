import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class ApiService {
	readonly ROOT_URL;

	constructor(private http: HttpClient) {
		this.ROOT_URL = 'http://dfadigitalagency-api.co.uk/api/v2';
	}

	get(uri: string) {
		return this.http.get(`${this.ROOT_URL}/${uri}`);
	}

	post(uri: string, payload: Object) {
		return this.http.post(`${this.ROOT_URL}/${uri}`, payload);
	}

	sendContact(
		fullname: string,
		email: string,
		subject: string,
		message: string
	) {
		return this.http.post(
			`${this.ROOT_URL}/mails/sendcontact`,
			{
				fullname,
				email,
				subject,
				message
			},
			{
				observe: 'response'
			}
		);
	}
}
