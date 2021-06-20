import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutRwsInvitesComponent } from './about-rws-invites.component';

describe('AboutRwsInvitesComponent', () => {
  let component: AboutRwsInvitesComponent;
  let fixture: ComponentFixture<AboutRwsInvitesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutRwsInvitesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutRwsInvitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
