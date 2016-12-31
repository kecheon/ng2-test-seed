import {ComponentFixture, TestBed} from '@angular/core/testing';
import {DebugElement} from '@angular/core';
import {By} from '@angular/platform-browser';

import {BidAppModule} from './bid-bootstrap';
import {BidComponent} from './bid-component';

describe("1st test", () => {
	it("true is true", () => {
		expect(true).toBe(true);
	});
	// How do I know the code line where error or test fails from test run messages which use .js
});

describe("BidComponent test", () => {
	let comp: BidComponent;
	let fixture: ComponentFixture<BidComponent>;
	let de: DebugElement;
	let el: HTMLElement;

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [BidComponent]
		});
		fixture = TestBed.createComponent(BidComponent);
		comp = fixture.componentInstance;
		de = fixture.debugElement.query(By.css('h1'));
		el = de.nativeElement;
	});

	it("has no title yet", () => {
		expect(el.textContent).toEqual('');
	});

	it("has title after interpolation", () => {
		fixture.detectChanges();
		expect(el.textContent).toEqual('입찰정보시스템 by InnoG2B');
	});
});