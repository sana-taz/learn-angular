import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigTailwindComponent } from './config-tailwind.component';

describe('ConfigTailwindComponent', () => {
  let component: ConfigTailwindComponent;
  let fixture: ComponentFixture<ConfigTailwindComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfigTailwindComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigTailwindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
