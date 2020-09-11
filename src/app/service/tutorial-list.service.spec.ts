import { TestBed } from '@angular/core/testing';

import { TutorialListService } from './tutorial-list.service';

describe('TutorialListService', () => {
  let service: TutorialListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TutorialListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
