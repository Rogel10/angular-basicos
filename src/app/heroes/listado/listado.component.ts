import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {

  public heroes: string[] = ['Spiderman', 'IronMan', 'Hulk', 'Thor','Wolverine'];
  public itemBorrado: string = '';

  borrarHeroe() {

   this.itemBorrado = this.heroes.shift() || '';
   console.log('ItemBorrado: ',this.itemBorrado);

  }


}
