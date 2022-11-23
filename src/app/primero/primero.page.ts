import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-primero',
  templateUrl: './primero.page.html',
  styleUrls: ['./primero.page.scss'],
})
export class PrimeroPage implements OnInit {
  apruebo : number;
  rechazo : number;
  otro    : number;
  constructor() {
    this.apruebo = 0;
    this.rechazo = 0;
    this.otro = 0; 
  }

  ngOnInit() {
  }
  contadorApruebo()
  {
    this.apruebo = this.apruebo + 1;
  }
  contadorRechazo()
  {
    this.rechazo = this.rechazo + 1;
  }
  contadorOtro()
  {
    this.otro = this.otro + 1;
  }

  sumar(n1: number, n2:number)
  {
    return n1+n2;
  }
// type script microsoft
}
