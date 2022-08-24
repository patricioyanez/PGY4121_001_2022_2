import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-segunda-pagina',
  templateUrl: './segunda-pagina.page.html',
  styleUrls: ['./segunda-pagina.page.scss'],
})
export class SegundaPaginaPage implements OnInit {

  constructor(private alertController: AlertController) { }
  valor = "Hola";
  ngOnInit() {
  }

  async onClick() {
    const alert = await this.alertController.create({
      header: 'Alerta',
      subHeader: 'Datos Ingresados',
      message: 'Sus datos fueron ingresados con éxito',
      buttons: ['OK'],
    });

    await alert.present();
  }

}
