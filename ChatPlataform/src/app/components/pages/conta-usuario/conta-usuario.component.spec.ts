import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContaUsuarioComponent } from './conta-usuario.component';

describe('ContaUsuarioComponent', () => {
  let component: ContaUsuarioComponent;
  let fixture: ComponentFixture<ContaUsuarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContaUsuarioComponent]
    });
    fixture = TestBed.createComponent(ContaUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
