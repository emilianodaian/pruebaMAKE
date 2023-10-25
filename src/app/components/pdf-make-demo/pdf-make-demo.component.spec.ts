import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfMakeDemoComponent } from './pdf-make-demo.component';

describe('PdfMakeDemoComponent', () => {
  let component: PdfMakeDemoComponent;
  let fixture: ComponentFixture<PdfMakeDemoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PdfMakeDemoComponent]
    });
    fixture = TestBed.createComponent(PdfMakeDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
