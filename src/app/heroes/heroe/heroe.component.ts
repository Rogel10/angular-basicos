import { Component } from '@angular/core';

@Component( {
    selector: 'app-heroe',
    templateUrl: './heroe.component.html'
})

export class HeroeComponent {

    public nombre: string = "SpiderMan";
    public edad: number = 35;


    get nombreCapitalizado():string {
        return this.nombre.toUpperCase();
    }

    obtenerNombre ():string {
        return `${this.nombre} - ${this.edad}`;
    }

    //! One way data binding
    cambiarNombre():void {
        this.nombre = "Wolverine";
    }
    
    //! One way data binding
    cambiarEdad():void {
        this.edad = 150;
    }

}