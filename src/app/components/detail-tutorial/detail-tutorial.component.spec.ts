import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailTutorialComponent } from './detail-tutorial.component';

describe('DetailTutorialComponent', () => {
  let component: DetailTutorialComponent;
  let fixture: ComponentFixture<DetailTutorialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailTutorialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailTutorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
