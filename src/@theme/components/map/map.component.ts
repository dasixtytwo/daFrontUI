import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
	selector: 'app-map',
	templateUrl: './map.component.html',
	styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit, AfterViewInit {
	private map;

	constructor() {}

	private initmap(): void {
		this.map = L.map('map', {
			center: [55.6159752, -4.6423306],
			zoom: 14
		});

		const tiles = L.tileLayer(
			'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
			{
				maxZoom: 19,
				attribution:
					'&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
			}
		);

		const marker = L.marker([55.6159752, -4.6423306])
			.addTo(this.map)
			.bindPopup('Davide Agosti HQ');

		tiles.addTo(this.map);
		marker.addTo(this.map);
	}

	ngOnInit() {}

	ngAfterViewInit(): void {
		this.initmap();
	}
}
