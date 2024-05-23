import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EscolaListaComponent } from './escola-lista.component';

describe('EscolaListaComponent', () => {
  let component: EscolaListaComponent;
  let fixture: ComponentFixture<EscolaListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EscolaListaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EscolaListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
