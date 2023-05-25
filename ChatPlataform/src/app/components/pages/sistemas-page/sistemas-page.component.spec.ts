import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SistemasPageComponent } from './sistemas-page.component';

describe('SistemasPageComponent', () => {
  let component: SistemasPageComponent;
  let fixture: ComponentFixture<SistemasPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SistemasPageComponent]
    });
    fixture = TestBed.createComponent(SistemasPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
