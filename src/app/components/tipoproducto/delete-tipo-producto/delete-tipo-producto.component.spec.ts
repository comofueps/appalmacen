import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteTipoProductoComponent } from './delete-tipo-producto.component';

describe('DeleteTipoProductoComponent', () => {
  let component: DeleteTipoProductoComponent;
  let fixture: ComponentFixture<DeleteTipoProductoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteTipoProductoComponent]
    });
    fixture = TestBed.createComponent(DeleteTipoProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
