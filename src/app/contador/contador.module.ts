
import { NgModule } from '@angular/core';
import { ContadorComponnet } from './contador/contador.component';

@NgModule({

    declarations: [
        ContadorComponnet
    ],
    exports: [
        ContadorComponnet
    ]

})

export class ContadorModule {}