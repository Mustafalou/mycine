import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CinemasessionComponent } from './cinemasession.component';

describe('CinemasessionComponent', () => {
  let component: CinemasessionComponent;
  let fixture: ComponentFixture<CinemasessionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CinemasessionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CinemasessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
