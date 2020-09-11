import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyTutorialComponent } from './modify-tutorial.component';

describe('ModifyTutorialComponent', () => {
  let component: ModifyTutorialComponent;
  let fixture: ComponentFixture<ModifyTutorialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifyTutorialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyTutorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
