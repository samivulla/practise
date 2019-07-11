import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepatListComponent } from './depat-list.component';

describe('DepatListComponent', () => {
  let component: DepatListComponent;
  let fixture: ComponentFixture<DepatListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepatListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepatListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
