import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Home2InforComponent } from './home2-infor.component';

describe('Home2InforComponent', () => {
  let component: Home2InforComponent;
  let fixture: ComponentFixture<Home2InforComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Home2InforComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Home2InforComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
