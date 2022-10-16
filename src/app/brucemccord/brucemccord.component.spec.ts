import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrucemccordComponent } from './brucemccord.component';

describe('BrucemccordComponent', () => {
  let component: BrucemccordComponent;
  let fixture: ComponentFixture<BrucemccordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrucemccordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrucemccordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
