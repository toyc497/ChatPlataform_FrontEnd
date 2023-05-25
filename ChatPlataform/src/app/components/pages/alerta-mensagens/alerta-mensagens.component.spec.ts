import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertaMensagensComponent } from './alerta-mensagens.component';

describe('AlertaMensagensComponent', () => {
  let component: AlertaMensagensComponent;
  let fixture: ComponentFixture<AlertaMensagensComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlertaMensagensComponent]
    });
    fixture = TestBed.createComponent(AlertaMensagensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
