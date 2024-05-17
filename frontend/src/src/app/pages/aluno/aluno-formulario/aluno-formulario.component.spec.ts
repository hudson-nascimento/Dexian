import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlunoFormularioComponent } from './aluno-formulario.component';

describe('AlunoFormularioComponent', () => {
  let component: AlunoFormularioComponent;
  let fixture: ComponentFixture<AlunoFormularioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlunoFormularioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AlunoFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
