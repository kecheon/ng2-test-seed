import {Component} from '@angular/core';

@Component({
	selector: 'bid-app',
	template: `<h1>{{ title }}</h1>`,
})
export class BidComponent {
	title: string;
	constructor() {
		this.title = '입찰정보시스템 by InnoG2B';
	}
}