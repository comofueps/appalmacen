import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteVentaComponent } from './delete-venta.component';

describe('DeleteVentaComponent', () => {
  let component: DeleteVentaComponent;
  let fixture: ComponentFixture<DeleteVentaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteVentaComponent]
    });
    fixture = TestBed.createComponent(DeleteVentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
