import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigAngularMaterialComponent } from './config-angular-material.component';

describe('ConfigAngularMaterialComponent', () => {
  let component: ConfigAngularMaterialComponent;
  let fixture: ComponentFixture<ConfigAngularMaterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfigAngularMaterialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigAngularMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
