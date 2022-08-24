import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-primero',
  templateUrl: './primero.page.html',
  styleUrls: ['./primero.page.scss'],
})
export class PrimeroPage implements OnInit {
  apruebo :number;
  rechazo :number;
  otro :number;
  constructor() { }

  ngOnInit() {
    this.apruebo = 0;
    this.rechazo = 0;
    this.otro = 0;
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

}
