import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-primero',
  templateUrl: './primero.page.html',
  styleUrls: ['./primero.page.scss'],
})
export class PrimeroPage implements OnInit {
  resultado :number;
  constructor() { }

  ngOnInit() {
    this.resultado = 0;
  }
  contador()
  {
    this.resultado = this.resultado + 1;
  }

}
