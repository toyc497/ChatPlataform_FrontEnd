import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditalPageComponent } from './edital-page.component';

describe('EditalPageComponent', () => {
  let component: EditalPageComponent;
  let fixture: ComponentFixture<EditalPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditalPageComponent]
    });
    fixture = TestBed.createComponent(EditalPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
