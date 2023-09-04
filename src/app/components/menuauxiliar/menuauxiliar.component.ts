import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menuauxiliar',
  templateUrl: './menuauxiliar.component.html',
  styleUrls: ['./menuauxiliar.component.css']
})
export class MenuauxiliarComponent {
  items: MenuItem[] | undefined;
  @Input() rutaDeseada: string = '';

  ngOnInit(): void {
    this.items = [
      {
        label: 'Añadir',
        icon: 'pi pi-fw pi-plus',        
        routerLink: this.rutaDeseada+'/add'
      },
      {
        label: 'Modificar',
        icon: 'pi pi-fw pi-sync',
        routerLink: this.rutaDeseada+'/update'        
      },
      {
        label: 'Eliminar',
        icon: 'pi pi-fw pi-delete-left',
        routerLink: this.rutaDeseada+'/delete'        
      }

    ]
  }


}