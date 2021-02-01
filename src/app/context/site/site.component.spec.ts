import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { SiteComponent } from './site.component';

describe('SiteComponent', () => {
  let component: SiteComponent;
  let fixture: ComponentFixture<SiteComponent>;

  let title: HTMLSpanElement|null;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SiteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    title = (fixture.debugElement.nativeElement as HTMLElement).querySelector("span");
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have toolbar title as component title element', () => {
    expect(title?.textContent).toEqual(component.title);
  });
});
