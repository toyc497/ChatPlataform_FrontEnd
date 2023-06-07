import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoresPageComponent } from './cores-page.component';

describe('CoresPageComponent', () => {
  let component: CoresPageComponent;
  let fixture: ComponentFixture<CoresPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoresPageComponent]
    });
    fixture = TestBed.createComponent(CoresPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
