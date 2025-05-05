import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FamilytreebuilderComponent } from './familytreebuilder.component';

describe('FamilytreebuilderComponent', () => {
  let component: FamilytreebuilderComponent;
  let fixture: ComponentFixture<FamilytreebuilderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FamilytreebuilderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FamilytreebuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
