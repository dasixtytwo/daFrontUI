import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class PortfolioService {
	visibleImages = [];

	getImages() {
		return (this.visibleImages = IMAGES.slice(0));
	}

	getImage(id: number) {
		return IMAGES.slice(0).find(image => image.id === id);
	}

	constructor() {}
}

const IMAGES = [
	{
		id: 1,
		category: 'application',
		caption: 'View from the boat',
		description:
			'Lorem ipsum dolor sit amet con sectetur adipiscing elit sed do.',
		url: 'assets/img/gallery/gallery-1.png'
	},
	{
		id: 2,
		category: 'application',
		caption: 'Sailing the coast',
		description:
			'Lorem ipsum dolor sit amet con sectetur adipiscing elit sed do.',
		url: 'assets/img/gallery/gallery-2.png'
	},
	{
		id: 3,
		category: 'react',
		caption: 'The water was nice',
		description:
			'Lorem ipsum dolor sit amet con sectetur adipiscing elit sed do.',
		url: 'assets/img/gallery/gallery-1.png'
	},
	{
		id: 4,
		category: 'application',
		caption: 'Cool water cavern',
		description:
			'Lorem ipsum dolor sit amet con sectetur adipiscing elit sed do.',
		url: 'assets/img/gallery/gallery-2.png'
	},
	{
		id: 5,
		category: 'react',
		caption: 'Sunset at the docks',
		description:
			'Lorem ipsum dolor sit amet con sectetur adipiscing elit sed do.',
		url: 'assets/img/gallery/gallery-2.png'
	},
	{
		id: 6,
		category: 'angular',
		caption: "Camping Trip '17'",
		description:
			'Lorem ipsum dolor sit amet con sectetur adipiscing elit sed do.',
		url: 'assets/img/gallery/gallery-1.png'
	},
	{
		id: 7,
		category: 'angular',
		caption: 'Kim and Jessie',
		description:
			'Lorem ipsum dolor sit amet con sectetur adipiscing elit sed do.',
		url: 'assets/img/gallery/gallery-2.png'
	},
	{
		id: 8,
		category: 'wordpress',
		caption: 'View from the top',
		description:
			'Lorem ipsum dolor sit amet con sectetur adipiscing elit sed do.',
		url: 'assets/img/gallery/gallery-1.png'
	}
];
