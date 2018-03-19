import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchCountryComponent } from './search-country.component';

describe('SearchCountryComponent', () => {
    let component: SearchCountryComponent;
    let fixture: ComponentFixture<SearchCountryComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [SearchCountryComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SearchCountryComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});