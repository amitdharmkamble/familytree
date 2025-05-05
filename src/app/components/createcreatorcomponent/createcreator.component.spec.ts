import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatecreatorComponent } from './createcreator.component';

describe('CreatecreatorcomponentComponent', () => {
  let component: CreatecreatorComponent;
  let fixture: ComponentFixture<CreatecreatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreatecreatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatecreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
