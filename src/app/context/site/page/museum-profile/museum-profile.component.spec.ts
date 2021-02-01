import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MuseumProfileComponent } from './museum-profile.component';

describe('MuseumProfileComponent', () => {
  let component: MuseumProfileComponent;
  let fixture: ComponentFixture<MuseumProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MuseumProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MuseumProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
