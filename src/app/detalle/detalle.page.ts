import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.page.html',
  styleUrls: ['./detalle.page.scss'],
})
export class DetallePage implements OnInit {
  personas = [];
  persona : any;
  constructor(private activatedRouter: ActivatedRoute,
              private alertController : AlertController,
              private toastController : ToastController,
              private router : Router) {
    this.personas = [
      {
        id    : 1,
        nombre: 'Juan',
        edad  : 25,
        foto  : 'https://img.freepik.com/foto-gratis/retrato-estudio-hombre-moreno-confianza_1187-5799.jpg?w=2000'
      },
      {
        id    : 2,
        nombre: 'Diana',
        edad  : 30,
        foto  : 'https://image.shutterstock.com/image-photo/happy-young-woman-sitting-on-260nw-2018571389.jpg'

      },
      {
        id    : 3,
        nombre: 'Pedro',
        edad  : 45,
        foto  : 'https://img.freepik.com/foto-gratis/apuesto-hombre-empresario-sonriendo-alegre_176420-17877.jpg?w=2000'

      }
    ]
   }

  ngOnInit() {
    this.activatedRouter.paramMap.subscribe(paramMap => {
      const id = paramMap.get('id');
      console.log(id);
      this.persona = this.personas.find(x => {return x.id == Number(id)});
      console.log(this.persona);
    })
  }

  async si()
  {
      const toast = await this.toastController.create({
        message: 'Te agrado esta persona',
        icon: 'checkmark-circle-outline',
        duration: 2000
      });
      toast.present();
  }
  async no()
  {
      const alert = await this.alertController.create({
        header: 'Atención',
        subHeader: 'Mensaje importante',
        message: 'No te agrado esta persona.',
        buttons: ['Aceptar']
      });
    
      await alert.present();
  }
}
