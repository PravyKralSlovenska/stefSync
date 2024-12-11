import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PalettaComponent } from './paletta.component';

describe('PalettaComponent', () => {
  let component: PalettaComponent;
  let fixture: ComponentFixture<PalettaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PalettaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PalettaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
