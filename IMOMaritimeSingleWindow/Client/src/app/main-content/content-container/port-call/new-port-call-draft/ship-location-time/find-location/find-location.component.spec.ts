import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindLocationComponent } from './find-location.component';

describe('FindLocationComponent', () => {
    let component: FindLocationComponent;
    let fixture: ComponentFixture<FindLocationComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ FindLocationComponent ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(FindLocationComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});