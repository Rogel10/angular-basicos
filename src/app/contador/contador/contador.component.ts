import { Component } from '@angular/core'


@Component({
    selector: 'app-contador',
    template: `
    <div class="component-section">
        <h1>{{ title }}</h1>
        <h3>La base es: {{base}}</h3>
        <section class="contenedor">
            <button (click)="acumular(-base)"> -{{base}} </button>
            <span>{{numero}}</span>
            <button (click)="acumular(base)" > +{{base}} </button>
        </section>
    </div>
    `
})
export class ContadorComponnet {

    public title: string = 'Contador APP';
    public numero: number = 0;
    public base: number = 5;
  
    acumular( valor: number) {
      this.numero += valor;
    }

}