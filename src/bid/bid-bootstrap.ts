import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import {BidComponent} from './bid-component';

@NgModule({
	declarations: [BidComponent],
	imports: [BrowserModule],
	bootstrap: [BidComponent]
})
export class BidAppModule {}

platformBrowserDynamic().bootstrapModule(BidAppModule);
