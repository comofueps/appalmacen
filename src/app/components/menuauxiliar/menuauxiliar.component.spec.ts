import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuauxiliarComponent } from './menuauxiliar.component';

describe('MenuauxiliarComponent', () => {
  let component: MenuauxiliarComponent;
  let fixture: ComponentFixture<MenuauxiliarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuauxiliarComponent]
    });
    fixture = TestBed.createComponent(MenuauxiliarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
