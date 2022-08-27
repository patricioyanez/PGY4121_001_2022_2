import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.page.html',
  styleUrls: ['./listado.page.scss'],
})
export class ListadoPage implements OnInit {
  listado : any;
    
  constructor() { 
    this.listado = [{ id : '1',
                nombre : 'Juan',
                direccion : 'Americo Vespucio 1501'
              },
              { id : '2',
                nombre : 'Ana',
                direccion : 'Americo Vespucio 2501'
              },
              { id : '3',
                nombre : 'Leo',
                direccion : 'Americo Vespucio 3501'
              }];

  }

  ngOnInit() {
  }

}
