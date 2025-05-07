import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DtreeFamilyTreeComponent } from './dtree-family-tree.component';

describe('DtreeFamilyTreeComponent', () => {
  let component: DtreeFamilyTreeComponent;
  let fixture: ComponentFixture<DtreeFamilyTreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DtreeFamilyTreeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DtreeFamilyTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
