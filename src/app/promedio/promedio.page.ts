import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promedio',
  templateUrl: './promedio.page.html',
  styleUrls: ['./promedio.page.scss'],
})
export class PromedioPage implements OnInit {
  resultado : number
  constructor() { }

  ngOnInit() {
  }
  calcular(n1: HTMLInputElement,
          n2: HTMLInputElement,
          n3: HTMLInputElement,
          p1: HTMLInputElement,
          p2: HTMLInputElement,
          p3: HTMLInputElement)
          {
            
          }
}
