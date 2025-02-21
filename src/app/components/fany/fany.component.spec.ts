import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FanyComponent } from './fany.component';

describe('FanyComponent', () => {
  let component: FanyComponent;
  let fixture: ComponentFixture<FanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FanyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
