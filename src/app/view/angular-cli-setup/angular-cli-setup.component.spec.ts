import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularCliSetupComponent } from './angular-cli-setup.component';

describe('AngularCliSetupComponent', () => {
  let component: AngularCliSetupComponent;
  let fixture: ComponentFixture<AngularCliSetupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularCliSetupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularCliSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
