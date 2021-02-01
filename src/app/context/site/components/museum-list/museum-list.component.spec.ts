import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MuseumListComponent } from './museum-list.component';

describe('MuseumListComponent', () => {
  let component: MuseumListComponent;
  let fixture: ComponentFixture<MuseumListComponent>;
  let h3: HTMLHeadingElement | null;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MuseumListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MuseumListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a title the input is passed', () => {
    component.title = "Dumb";
    fixture.detectChanges();
    h3 = (fixture.debugElement.nativeElement as HTMLElement).querySelector("h3");
    expect(h3).toBeTruthy();
    expect(h3?.textContent).toEqual(component.title);
  });

  it('should not have a title the input is not passed', () => {
    h3 = (fixture.debugElement.nativeElement as HTMLElement).querySelector("h3");
    expect(h3).toBeFalsy();
  });
});
