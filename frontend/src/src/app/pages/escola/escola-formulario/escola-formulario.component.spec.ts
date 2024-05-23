import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EscolaFormularioComponent } from './escola-formulario.component';

describe('EscolaFormularioComponent', () => {
  let component: EscolaFormularioComponent;
  let fixture: ComponentFixture<EscolaFormularioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EscolaFormularioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EscolaFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
